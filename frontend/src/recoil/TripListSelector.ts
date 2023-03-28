import { atom, selector, selectorFamily, SerializableParam } from "recoil";
import axios from "axios";
import { customAxios } from "./customAxios";
import { ListType } from "../types/tripListTypes";
import { citySelectedState } from "./RegionState";

// titleType 타입 정의
type TitleType =
  | "restaurant"
  | "accommodation"
  | "tourSpot"
  | "culture"
  | "leports"
  | "shopping";

interface ListSelectorProps {
  titleType: TitleType;
  area: number;
  citySelected?: number;
  barrier: string;
  page: number;
  size: number;
  [key: string]: SerializableParam;
}

// 여행지 목록 가져오는 selector
export const getListSelector = selectorFamily<ListType[], ListSelectorProps>({
  key: "getListSelector",
  get: ({ titleType, area, barrier, page, size }) => async ({ get }) => {
    const selectedCity = get(citySelectedState) as number;
    // console.log(selectedCity)
    const contentTypeId = getContentTypeId(titleType);
    try {
      const response = await customAxios.get(
        `location/list/${contentTypeId}?area=${selectedCity}&barrier=${barrier}&page=${page}&size=${size}`
      );
      // console.log(response.data.contents)
      return response.data.contents.map((item: ListType) => ({
        ...item,
        category: titleType,
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  },
});

// titleType에 따른 contentTypeId 반환하는 함수
const getContentTypeId = (titleType: string) => {
  switch (titleType) {
    case "restaurant":
      return 39;
    case "accommodation":
      return 32;
    case "tourSpot":
      return 12;
    case "culture":
      return 14;
    case "leports":
      return 28;
    case "shopping":
      return 38;
    default:
      throw new Error(`Invalid titleType: ${titleType}`);
  }
};