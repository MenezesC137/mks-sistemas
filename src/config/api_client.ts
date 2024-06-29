import axios from "axios";

const api_client = axios.create({
  baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api_client;
