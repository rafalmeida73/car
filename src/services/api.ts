import axios from "axios";

export const api = axios.create({
  baseURL: `https://carros-springboot.herokuapp.com/api/v2`,
});
