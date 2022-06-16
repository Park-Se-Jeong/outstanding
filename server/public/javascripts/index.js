
const postEl = document.querySelectorAll(".post");
const dataList = [];

// item 라우터로 이동
postEl.forEach((post, index) => {
  post.addEventListener("click", function (e) {
    location.href = "/item";
  });
  console.log(post.innerHTML);
});




