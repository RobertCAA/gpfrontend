import axios from "axios";
// const url = require("url");
// const queryParams = {
//   limit: 1,
//   sort: "desc",
// };
// const params = new url.URLSearchParams(queryParams);

const URL = "http://localhost:8000/users";

export const api = axios.create({
  baseURL: URL,
});

export const getUsers = async () => {
  const response = await api.get("/");
  return response.data;
};

export const getUsersPromises = () => {
  fetch(URL).then((res) => {
    console.log(`Recived response:${res}`);
  });
};

export const getUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  //  const response = await api.get("users", {
  //   params : {
  //     id: 1
  //   }
  // });
  return response.data;
};
