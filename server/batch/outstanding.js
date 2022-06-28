const { MongoClient } = require('mongodb');
const cheerio = require('cheerio');
const request = require('request');
const _ = require('lodash');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'test';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('outstanding_post');

    request('https://outstanding.kr', {}, async (err, resp, body) => {
        if (err) return;

        let $ = cheerio.load(body);
        const json = JSON.parse($('#__NEXT_DATA__').html());
        const postList = json.props.pageProps.apolloState;

        const titleList = _.chain(postList)
            .filter((obj) => {
                return obj && obj.id && obj.title;
            })
            .map((obj) => {
                return {
                    id: obj.id,
                    title: obj.title,
                    text: obj.text,
                    thumbnailUrl: obj.thumbnailUrl,
                    uri: obj.uri,
                };
            })
            .values();

        for (const item of titleList) {
            const newItem = await refromData(item);
            //리턴된 프라미스가 이행될 때까지 기다리고 다음 코드가 실행된다.
            //refromData(item)에서 리턴된 프라미스가 이행될 때까지 기다리려면 await이니까
            //이 외부 함수는 async로 감싸져 있어야 한다
            const res = await collection.updateOne(
                {
                    id: item.id,
                },
                {
                    $set: newItem,
                },
                {
                    upsert: true,
                }
            );

            console.log('success', item.id, res);
        }

        // for (const item of titleList) {
        //     refromDataCb(item, (newItem) => {
        //         collection.updateOne(
        //             {
        //                 id: item.id,
        //             },
        //             {
        //                 $set: newItem,
        //             },
        //             {
        //                 upsert: true,
        //             },
        //             (err, res) => {
        //                 console.log('success', item.id, res);
        //             }
        //         );
        //     });
        // }

        client.close();
    });

    // the following code examples can be pasted here...

    return 'done.';
}

async function refromData(item) {
    return new Promise((resolve) => {
        const uri = item.uri;
        request(`https://outstanding.kr/${uri}`, {}, async (err, resp, body) => {
            if (err) return;

            try {
                let $ = cheerio.load(body);
                const json = JSON.parse($('#__NEXT_DATA__').html());
                const post = json.props.pageProps.apolloState;
                // console.log(post);
                const test = _.filter(post, (obj) => {
                    return obj.uri === uri;
                });
                const comment = _.filter(post, (obj) => {
                    return obj.__typename === 'Comment';
                });
                item.html = test[0].html;
                item.comment = comment;
            } catch (e) {}
            return resolve(item);
        });
    });
}
//refromData는 promise를 리턴함
//async로 감싸져 있으면 resolved promise를 반환하니까

function refromDataCb(item, cb) {
    request(`https://outstanding.kr/${postId}`, {}, async (err, resp, body) => {
        if (err) return;

        let $ = cheerio.load(body);
        const json = JSON.parse($('#__NEXT_DATA__').html());
        const post = json.props.pageProps.apolloState;
        // console.log(post);
        const test = _.filter(post, (obj) => {
            return obj.uri === postId;
        });
        const comment = _.filter(post, (obj) => {
            return obj.__typename === 'Comment';
        });
        item.html = test[0].html;
        item.comment = comment;
        return cb(item);
    });
}

main().then(console.log).catch(console.error).finally();
