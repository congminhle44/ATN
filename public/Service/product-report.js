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
      return err;
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
                <td>
                <button class="btn btn-danger" onClick="delProduct(${item.maSP})">Xóa đơn hàng</button>
                </td>
                </tr>
            `;
  });
  return (productTable.innerHTML = content);
};

getEle("refresh").addEventListener("click", () => {
  window.location.reload();
});

delProduct = (id) => {
  ToyService.delProduct(id)
    .then((result) => {
      getProductList();
      return result;
    })
    .catch((err) => {
      alert("Không thể xóa đơn hàng");
      return err;
    });
};
