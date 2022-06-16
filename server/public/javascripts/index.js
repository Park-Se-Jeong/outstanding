
const postEl = document.querySelectorAll(".post");

// item 라우터로 이동
postEl.forEach((post) => {
  post.addEventListener("click", function (e) {
    location.href = "/item";
  });
});



