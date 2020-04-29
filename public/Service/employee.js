let ToyService = new toyService();
getEmployList();
function getE(id) {
  return document.getElementById(id);
}
function getEmployList() {
  ToyService.getEmploy()
    .then((result) => {
      renderEmployeeData(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
renderEmployeeData = (employeeList) => {
  let employ = getE("employee-table");
  let employee = "";
  employeeList.map((item, index) => {
    employee += `
        <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.position}</td>
        <td>${item.store}</td>
        <td>${item.age}</td>
        <td>${item.startDate}</td>
        <td>${item.salary}</td>
        <td><button class="btn btn-danger" onClick="delEmploy(${
          item.id
        })">Delete</button></td>
      </tr>
        `;
  });
  return (employ.innerHTML = employee);
};
addEmployee = () => {
  let d = new Date();
  let dd = d.getDate();
  let mm = d.getMonth();
  let yy = d.getFullYear();
  let employee = {
    name: getE("hoTen").value,
    position: getE("position").value,
    store: getE("store").value,
    age: getE("age").value,
    startDate: `${dd} / ${mm} / ${yy}`,
    salary: getE("salary").value,
  };
  console.log(employee);
  ToyService.addEmployee(employee)
    .then((result) => {
      alert("Thêm nhân viên thành công");
      return result;
    })
    .catch((err) => {
      alert("Không thể thêm nhân viên do thiếu thông tin!");
    });
};
delEmploy = (employId) => {
  ToyService.delEmploy(employId)
    .then((result) => {
      getEmployList();
      return result;
    })
    .catch((err) => {
      console.log("Không thể xóa");
    });
};
