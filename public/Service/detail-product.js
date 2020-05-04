let ToyService = new toyService();
getDetailProduct();
function getE(id) {
  return document.getElementById(id);
}
function getDetailProduct() {
  let id = location.pathname.split("/maSP=")[1];
  ToyService.getToyId(id)
    .then((result) => {
      renderDetail(result.data);
      return result;
    })
    .catch((err) => {
      alert("Không thể render");
    });
}

renderDetail = (product) => {
  getE("product-img").src = product.hinhAnh;
  getE("product-name").innerHTML = product.tenSP;
  getE("product-id").innerHTML = product.id;
  getE("product-des").innerHTML = product.moTa;
  getE("product-price").innerHTML = product.giaTien;
  getE("title").innerHTML = `ATN toys | ${product.tenSP}`;
};

getE("buyBtn").addEventListener("click", () => {
  let d = new Date();
  let dd = d.getDate();
  let mm = d.getMonth() + 1;
  let yy = d.getFullYear();
  let product = {
    maSP: getE("product-id").innerHTML,
    tenSP: getE("product-name").innerHTML,
    giaTien: getE("product-price").innerHTML,
    ngayBan: `${dd} / ${mm} / ${yy}`,
  };
  ToyService.buyProduct(product)
    .then((result) => {
      alert("Đã tạo đơn hàng thành công");
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
});
