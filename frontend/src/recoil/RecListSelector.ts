import { selectorFamily, SerializableParam } from "recoil";
import { getRecEtcApi } from "./Api";
import { recommendListType } from "../types/recListTypes";

interface ParamTypes {
  recentContentId: number;
  [key: string]: SerializableParam;
}

// 추천 목록 가져오는 selector
export const getRecListSelector = selectorFamily<recommendListType, ParamTypes>(
  {
    key: "getRecListSelector",
    get:
      ({ recentContentId }) =>
      async ({ get }) => {
        try {
          const response = await getRecEtcApi(recentContentId);
          console.log(response.data)
          const data = await response.data;
          return data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
  }
);
