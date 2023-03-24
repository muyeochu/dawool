import { atom, selector } from "recoil";
import axios from "axios";
import { customAxios } from "./customAxios";
import { ListType } from "../types/tripListTypes";

const getTripListData = (
  contentTypeId: any,
  area: any,
  barrier: any,
  page: any,
  size: any,
): Promise<ListType[]> =>
  customAxios
    .get(
      `location/list/${contentTypeId}?area=${area}&barrier=${barrier}&page=${page}&size=${size}`
    )
    .then((response) => {
      console.log(response.data);
      return response.data.contents;
    })
    .catch((error) => {
      console.log(error, "여기가 에러!");
    });

export const RestaurantListSelector = selector<ListType[]>({
  key: "RestaurantListSelector",
  get: async () => {
    // console.log("들어옴!!");
    try {
      const restaurantList = await getTripListData(39, 1, 10000, 0, 10);
      console.log("식당 list!", restaurantList);

      return restaurantList;
    } catch (err) {
      throw err;
      // return [];
    }
  },
});

export const AccommodationListSelector = selector<ListType[]>({
  key: "AccommodationListSelector",
  get: async () => {
    try {
      // 수정해야 할 부분..!! (일단 임시)
      const accommodationList = await getTripListData(32, 1, 10000, 0, 10);
      // console.log("숙박 list!", accommodationList);

      return accommodationList;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
});
