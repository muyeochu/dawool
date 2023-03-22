import axios, { AxiosInstance } from 'axios';

export const customAxios: AxiosInstance = axios.create({
  baseURL: "http://j8d105.p.ssafy.io:8888", // 서버의 기본 URL
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});