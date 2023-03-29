import { customAxios, customAxios2, customAxiosRec } from "./customAxios";

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

// 북마크 저장 및 해제
export const bookmarkApi = async (info: any) =>
  await customAxios2.post(
    `location/bookmark`,
    {
      spotId: info.spotId,
      contentId: info.contentId,
      contentTypeId: info.contentTypeId,
      title: info.title,
      imageUrl: info.firstImage,
      category: info.category,
      deaf: info.deaf,
      visuallyImpaired: info.visuallyImpaired,
      mobilityWeak: info.mobilityWeak,
      old: info.old,
      infant: info.infant,
    },
    {
      withCredentials: true,
    }
  );

// 북마크 목록 불러오기
export const getBookmarkListApi = async (page: number, size: number) =>
  await customAxios.get(`location/bookmark?page=${page}&size=${size}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
