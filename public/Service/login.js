function getEle(id) {
  return document.getElementById(id);
}

getEle("formLogin").addEventListener("click", (event) => {
  adminData = [
    {
      username: "congminhle441",
      password: "123456",
      name: "Le Cong Minh",
      id: "GCS18128",
      address: "44/1K Điện Biên Phủ",
      position: "Board director",
      age: "20",
    },
  ];
  event.preventDefault();
  let username = getEle("username").value;
  let password = getEle("password").value;
  adminData.map((item, index) => {
    if (username === item.username && password === item.password) {
      window.location.href = "/report";
      localStorage.setItem("Admin", JSON.stringify(item));
    } else {
      alert("Bạn không có quyền truy cập");
    }
  });
});
