const ToyService = new toyService();
getProductList();

function getEle(id) {
  return document.getElementById(id);
}
function getProductList() {
  ToyService.getProduct()
    .then((result) => {
      renderProductTable(result.data);
      return result;
    })
    .catch((err) => {
      alert("Không tìm thấy sản phẩm nào");
    });
}

renderProductTable = (product) => {
  let productTable = getEle("product-table");
  let content = "";
  product.map((item, index) => {
    content += `
            <tr>
            <td>${item.maSP}</td>
            <td>${item.tenSP}</td>
            <td>${item.giaTien}</td>
            <td>${item.ngayBan}</td>
            </tr>
        `;
  });
  return (productTable.innerHTML = content);
};
