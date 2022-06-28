const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "test";
const client = new MongoClient(url);
const res = {};

console.log("mongodb connect");

module.exports = { connect, getDB };

function getDB() {
  return res;
}

async function connect() {
  if (res.OutDB) {
    return res;
  }
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  res.OutDB = db.collection("outstanding_post");
  return "Connect Database Mongo";
}
