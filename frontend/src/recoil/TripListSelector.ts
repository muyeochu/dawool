import { atom, selector } from "recoil";
import axios from "axios";
import { customAxios } from "./customAxios";
import { ListType } from "../types/tripListTypes";

const getTripListData = (
  contentTypeId: number,
  area: number,
  barrier: string,
  page: number,
  size: number
): Promise<ListType[]> =>
  customAxios
    .get(
      `location/list/${contentTypeId}?area=${area}&barrier=${barrier}&page=${page}&size=${size}`
    )
    .then((response) => {
      // console.log(response.data);
      return response.data.contents;
    })
    .catch((error) => {
      console.log(error);
    });

// 식당 목록
export const RestaurantListSelector = selector<ListType[]>({
  key: "RestaurantListSelector",
  get: async () => {
    try {
      const restaurantList = await getTripListData(39, 1, "10000", 0, 10);

      return restaurantList;
    } catch (err) {
      throw err;
    }
  },
});

// 숙박 목록
export const AccommodationListSelector = selector<ListType[]>({
  key: "AccommodationListSelector",
  get: async () => {
    try {
      const accommodationList = await getTripListData(32, 1, "10000", 0, 10);

      return accommodationList;
    } catch (err) {
      throw err;
    }
  },
});

// 관광지 목록
export const TourSpotListSelector = selector<ListType[]>({
  key: "TourSpotListSelector",
  get: async () => {
    try {
      const tourSpotList = await getTripListData(12, 1, "10000", 0, 10);

      return tourSpotList;
    } catch (err) {
      throw err;
    }
  },
});

// 문화시설 목록
export const CultureListSelector = selector<ListType[]>({
  key: "CultureListSelector",
  get: async () => {
    try {
      const cultureList = await getTripListData(14, 1, "10000", 0, 10);

      return cultureList;
    } catch (err) {
      throw err;
    }
  },
});

// 레포츠 목록
export const LeportsListSelector = selector<ListType[]>({
  key: "LeportsListSelector",
  get: async () => {
    try {
      const leportsList = await getTripListData(28, 1, "00000", 0, 10);

      return leportsList;
    } catch (err) {
      throw err;
    }
  },
});

// 쇼핑 목록
export const ShoppingListSelector = selector<ListType[]>({
  key: "ShoppingListSelector",
  get: async () => {
    try {
      const shoppingList = await getTripListData(38, 1, "00000", 0, 10);

      return shoppingList;
    } catch (err) {
      throw err;
    }
  },
});
