import axios from "axios";

export const Api = {
  getTop5() {
    return axios("/api/top5");
  },

  sendAuthorData(name, age) {
    axios({
      method: "post",
      url: "/api/author",
      data: {
        name: name,
        age: age
      }
    }).catch();
  },

  sendBookData(author_id, title, pages) {
    axios({
      method: "post",
      url: "/api/book",
      data: {
        author_id: author_id,
        title: title,
        pages: pages
      }
    }).catch();
  }
};
