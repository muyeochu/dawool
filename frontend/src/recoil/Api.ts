import { customAxios, customAxios2, customAxiosRec } from "./customAxios";

// GET //
export const getDetailApi = async (contentId: number, location: number) =>
  await customAxios2.get(`location/${location}/${contentId}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

export interface searchQueryTypes {
  title: string;
  type: number;
  barrier: string;
  page: number;
  size: number;
}

// 검색결과 요청
export const getSearchApi = async ({
  title,
  type,
  barrier,
  page,
  size,
}: searchQueryTypes) =>
  await customAxios.get(
    `search?title=${title}&type=${type}&barrier=${barrier}&page=${page}&size=${size}`,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  );

// 즐길거리 추천
export const getRecEntertainmentApi = async (contentTypeId: number) =>
  await customAxiosRec.get(`recommend/spot/${contentTypeId}/`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      // Authorization:
      //     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NDBlYTY5MTg5YTY1MTVhZWNkNDRkZjgiLCJBdXRoZW50aWNhdGlvbiI6IlVTRVIiLCJpYXQiOjE2Nzk1NTUxNzIsImV4cCI6MTY4MjE0NzE3Mn0.WZR8zznJipY1KFy_mzOx5FboMOrCQoKJpo8x9fZqgGw",
    },
  });

// POST //
// 취향설문 (selector 아직 안 만듦..)
export const postSurveyApi = async () =>
  await customAxios2.post(`user/survey`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

// 식당 & 숙박 추천
export const postRecEtcApi = async (
  titleType: string,
  recentContentId: number
) =>
  await customAxiosRec.post(
    `recommend/${titleType}/`,
    { contentid: recentContentId },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        // Authorization:
        //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NDBlYTY5MTg5YTY1MTVhZWNkNDRkZjgiLCJBdXRoZW50aWNhdGlvbiI6IlVTRVIiLCJpYXQiOjE2Nzk1NTUxNzIsImV4cCI6MTY4MjE0NzE3Mn0.WZR8zznJipY1KFy_mzOx5FboMOrCQoKJpo8x9fZqgGw",
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
