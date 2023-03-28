import { customAxios, customAxiosRec } from "./customAxios";

// GET
export const getDetailApi = async (contentId: number, location: number) =>
  await customAxios.get(`location/${location}/${contentId}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

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

// POST
export const getRecEtcApi = async (recentContentId: number) =>
  await customAxiosRec.post(
    `recommend/restaurant/`,
    { recentContentId: recentContentId },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
