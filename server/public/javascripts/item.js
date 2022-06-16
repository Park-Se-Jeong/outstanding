fetch("/item", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "testing",
    userId: 1,
  })
}).then((res) => console.log(res));