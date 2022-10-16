import axios from "axios";
// const url = require("url");
// const queryParams = {
//   limit: 1,
//   sort: "desc",
// };
// const params = new url.URLSearchParams(queryParams);

export const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const getUser = async () => {
  const response = await api.get("/users/:id");
  //  const response = await api.get(`/users/${params._id}`);
  //  const response = await api.get("users", {
  //   params : {
  //     id: 1
  //   }
  // });
  return response.data;
};
