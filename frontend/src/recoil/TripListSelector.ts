import { atom, selector } from "recoil";
import axios from "axios";
import { customAxios } from "./customAxios";
import { ListType } from "../types/tripListTypes";



// 여행지 목록 가져오는 함수
const getTripListData = async (
  contentTypeId: number,
  area: number,
  barrier: string,
  page: number,
  size: number
): Promise<ListType[]> => {
  try {
    const response = await customAxios.get(
      `location/list/${contentTypeId}?area=${area}&barrier=${barrier}&page=${page}&size=${size}`
    );
    return response.data.contents;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getListSelector = (
  key: string,
  contentTypeId: number,
  barrier: string
) => {
  return selector<ListType[]>({
    key: key,
    get: async () => {
      try {
        const list = await getTripListData(contentTypeId, 1, barrier, 0, 10);
        return list;
      } catch (err) {
        throw err;
      }
    },
  });
};

// 식당 목록
export const RestaurantListSelector = getListSelector(
  "RestaurantListSelector",
  39,
  "10000"
);

// 숙박 목록
export const AccommodationListSelector = getListSelector(
  "AccommodationListSelector",
  32,
  "10000"
);

// 관광지 목록
export const TourSpotListSelector = getListSelector(
  "TourSpotListSelector",
  12,
  "10000"
);

// 문화시설 목록
export const CultureListSelector = getListSelector(
  "CultureListSelector",
  14,
  "10000"
);

// 레포츠 목록
export const LeportsListSelector = getListSelector(
  "LeportsListSelector",
  28,
  "00000"
);

// 쇼핑 목록
export const ShoppingListSelector = getListSelector(
  "ShoppingListSelector",
  38,
  "00000"
);
