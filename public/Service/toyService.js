function toyService() {
  this.getToy = () => {
    return axios({
      method: "GET",
      url: "https://5dce9e0375f9360014c25fe6.mockapi.io/api/atn",
    });
  };
}
