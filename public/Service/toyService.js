function toyService() {
  this.getToy = () => {
    return axios({
      method: "GET",
      url: "https://5dce9e0375f9360014c25fe6.mockapi.io/api/atn",
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
}
