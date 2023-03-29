import { selectorFamily, SerializableParam } from "recoil";
import { getRecEntertainmentApi, getRecEtcApi } from "./Api";
import { recommendListType } from "../types/recListTypes";

interface ParamTypes {
  recentContentId: number;
  [key: string]: SerializableParam;
}

interface getRecEntertainmentListSelectorProps {
  contentTypeId: number;
  [key: string]: SerializableParam;
}

// 즐길거리 추천 목록 가져오는 selector
export const getRecEntertainmentListSelector = selectorFamily<
  recommendListType,
  getRecEntertainmentListSelectorProps
>({
  key: "getRecEntertainmentListSelector",
  get:
    ({ contentTypeId }) =>
    async () => {
      try {
        const response = await getRecEntertainmentApi(contentTypeId);
        console.log(response.data);
        const data = await response.data;
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
});

// 식당&숙박 추천 목록 가져오는 selector
export const getRecListSelector = selectorFamily<recommendListType, ParamTypes>(
  {
    key: "getRecListSelector",
    get:
      ({ recentContentId }) =>
      async ({ get }) => {
        try {
          const response = await getRecEtcApi(recentContentId);
          console.log(response.data);
          const data = await response.data;
          return data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
  }
);
