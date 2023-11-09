import axios from "axios";
const BASE_URL = "http://localhost:3000/api/v1/auth/";

export function login(body: any) {
    try {
      const res = axios.post(BASE_URL + "login", body);
      return res;
    } catch (error) {
      console.log("hay un error");
    }
  }