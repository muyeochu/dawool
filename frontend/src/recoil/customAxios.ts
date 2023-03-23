import axios, { AxiosInstance } from 'axios';

// 인증이 필요 없는 기본 요청
export const customAxios: AxiosInstance = axios.create({
  baseURL: "http://j8d105.p.ssafy.io:8888/api/", // 서버의 기본 URL
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});