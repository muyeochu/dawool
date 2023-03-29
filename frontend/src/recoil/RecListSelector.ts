import { selectorFamily, SerializableParam } from "recoil";
import { getRecEntertainmentApi, getRecEtcApi } from "./Api";
import { RecListType, recommendListType } from "../types/recListTypes";

interface getRecEntertainmentSelectorProps {
  titleType: string;
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
    ({ titleType, contentTypeId }) =>
    async () => {
      try {
        const response = await getRecEntertainmentApi(contentTypeId);
        console.log(response.data);
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
        const response = await getRecEtcApi(titleType, recentContentId);
        // console.log(response.data.contents);
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
