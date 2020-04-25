function getEle(id) {
  return document.getElementById(id);
}

getEle("formLogin").addEventListener("click", (event) => {
  event.preventDefault();
  let username = getEle("username").value;
  let password = getEle("password").value;
  if (username === "congminhle441" && password === "123456") {
    window.location.href = "/report";
  }
});
