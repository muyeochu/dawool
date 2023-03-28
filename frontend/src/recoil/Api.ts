import { customAxios } from "./customAxios";

// 상세페이지 요청
export const getDetailApi = async (contentId: number, location: number) =>
  await customAxios.get(`location/${location}/${contentId}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

// 검색결과 요청
export const getSearchApi = async (
  title: string,
  type: number,
  barrier: string,
  page: number,
  size: number
) =>
  await customAxios.get(
    `search?title=${title}&type=${type}&barrier=${barrier}&page=${page}&size=${size}`,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  );


