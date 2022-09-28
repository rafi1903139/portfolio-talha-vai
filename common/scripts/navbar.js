// include navbar inside the html header tag

fetch("../views/navbar.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("header").innerHTML = data;
});