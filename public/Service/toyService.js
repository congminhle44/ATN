function toyService() {
  this.getToy = () => {
    return axios({
      method: "GET",
      url: "https://5dce9e0375f9360014c25fe6.mockapi.io/api/atn",
    });
  };
  this.getToyId = (id) => {
    return axios({
      method: "GET",
      url: `https://5dce9e0375f9360014c25fe6.mockapi.io/api/atn/${id}`,
    });
  };
  this.getEmploy = () => {
    return axios({
      method: "GET",
      url: "https://5dce9e0375f9360014c25fe6.mockapi.io/api/employee",
    });
  };
  this.delEmploy = (id) => {
    return axios({
      method: "DELETE",
      url: `https://5dce9e0375f9360014c25fe6.mockapi.io/api/employee/${id}`,
    });
  };
  this.buyProduct = (product) => {
    return axios({
      method: "POST",
      url: "https://5ea657db84f6290016ba681e.mockapi.io/product-report",
      data: product,
    });
  };
  this.getProduct = () => {
    return axios({
      method: "GET",
      url: "https://5ea657db84f6290016ba681e.mockapi.io/product-report",
    });
  };
  this.addEmployee = (employee) => {
    return axios({
      method: "POST",
      url: "https://5dce9e0375f9360014c25fe6.mockapi.io/api/employee",
      data: employee,
    });
  };
}
