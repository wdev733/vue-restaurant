const url = "http://localhost:8080/api";

const restaurants = {
  async getAll({ page = 1, pageSize = 10, restaurantName }) {
    if (page) {
      page = `page=${page}&`;
    }
    if (pageSize) {
      pageSize = `pagesize=${pageSize}&`;
    }
    if (restaurantName) {
      restaurantName = `name=${restaurantName}&`;
    } else {
      restaurantName = "";
    }

    try {
      const response = await fetch(
        `${url}/restaurants?${page}${pageSize}${restaurantName}`
      );
      return await response.json();
    } catch (err) {
      console.error("[ERROR] getAll : ", err);
    }
  },
  async getById(id) {
    try {
      const response = await fetch(`${url}/restaurants/${id}`);
      return await response.json();
    } catch (err) {
      console.error("[ERROR] getById : ", err);
    }
  },
  async create(formData) {
    try {
      const response = await fetch(`${url}/restaurants`, {
        method: "POST",
        body: formData
      });
      return await response.json();
    } catch (err) {
      console.error("[ERROR] create : ", err);
    }
  },
  async update({ id, formData }) {
    try {
      const response = await fetch(`${url}/restaurants/${id}`, {
        method: "PUT",
        body: formData
      });
      return await response.json();
    } catch (err) {
      console.error("[ERROR] update : ", err);
    }
  },
  async delete(id) {
    try {
      const response = await fetch(`${url}/restaurants/${id}`, {
        method: "DELETE"
      });
      return await response.json();
    } catch (err) {
      console.error("[ERROR] delete : ", err);
    }
  }
};

export default restaurants;
