import axios, { AxiosInstance } from "axios";

// 인증이 필요 없는 기본 요청
export const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL + "/api/", // 서버의 기본 URL
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

  export const customAxios2: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL + "/api/", // 서버의 기본 URL
    headers: {
      "Authorization" : "Bearer "+localStorage.getItem("token"),
      "Content-Type": "application/json;charset=UTF-8",
    },
    }
  )