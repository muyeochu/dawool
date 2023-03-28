import { customAxios, customAxiosRec } from "./customAxios";

// GET
export const getDetailApi = async (contentId: number, location: number) =>
  await customAxios.get(`location/${location}/${contentId}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

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
