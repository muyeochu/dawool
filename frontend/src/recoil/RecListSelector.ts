import { selectorFamily, SerializableParam } from "recoil";
import { getRecEntertainmentApi, postRecEtcApi } from "./Api";
import { RecListType, recommendListType } from "../types/recListTypes";

interface getRecEntertainmentSelectorProps {
  contentTypeId: number;
  [key: string]: SerializableParam;
}

interface getRecEtcSelectorProps {
  titleType: string;
  recentContentId: number;
  [key: string]: SerializableParam;
}

// 즐길거리 추천 목록 가져오는 selector
export const getRecEntertainmentSelector = selectorFamily<
  RecListType,
  getRecEntertainmentSelectorProps
>({
  key: "getRecEntertainmentSelector",
  get:
    ({ contentTypeId }) =>
    async () => {
      try {
        const response = await getRecEntertainmentApi(contentTypeId);
        return response.data.contents.map((item: recommendListType) => ({
          ...item
        }));
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
});

// 식당 & 숙박 추천 목록 가져오는 selector
export const getRecEtcSelector = selectorFamily<
  RecListType,
  getRecEtcSelectorProps
>({
  key: "getRecEtcSelector",
  get:
    ({ titleType, recentContentId }) =>
    async () => {
      try {
        const response = await postRecEtcApi(titleType, recentContentId);
        return response.data.contents.map((item: recommendListType) => ({
          ...item,
          category: titleType,
        }));
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
});
