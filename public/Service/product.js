const ToyService = new toyService();
getToyList();

function getToyList() {
  ToyService.getToy().then((result) => {
    renderToys(result.data);
  });
}
function getEle(id) {
  return document.getElementById(id);
}
renderToys = (toy) => {
  let listToys = getEle("product-carousel");
  let content = "";
  toy.map((item, index) => {
    content += `
    <div class="product-card card" style="width: 18rem; height:500px">
    <img
      class="card-img-top"
      src=${item.hinhAnh}
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">${item.tenSP}</h5>
      <p class="card-text price">
      ${item.giaTien}
      </p>
      <a href="#" class="btn detailToy-btn">detail</a>
    </div>
  </div>
        `;
  });
  listToys.innerHTML = content;
};
