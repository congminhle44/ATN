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
        <td>${item.name}</td>
        <td>${item.position}</td>
        <td>${item.store}</td>
        <td>${item.age}</td>
        <td>${item.startDate}</td>
        <td>${item.salary}</td>
        <td><button class="btn btn-danger" onClick="delEmploy(${item.id})">Xóa</button></td>
      </tr>
        `;
  });
  return (employ.innerHTML = employee);
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
