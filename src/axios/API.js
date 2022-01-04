import axios from "axios";
import { API_URL } from "../constants/api";

const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-TYpe": "application/json",
  },
});

export default API;
