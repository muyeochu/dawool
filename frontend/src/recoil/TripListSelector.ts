import { atom, selector } from "recoil";
import axios from "axios";
import { customAxios } from "./customAxios";
import { EtcListType, TripDataType } from "../types/tripListTypes";

// const getAccomodationListData = () => customAxios.get("location/list/32");

const getRestaurantListData = (
  area: number,
  barrier: number,
  page: number,
  size: number
): Promise<TripDataType | { data: never[] }> =>
  customAxios
    .get(
      `location/list/39?area=${area}&barrier=${barrier}&page=${page}&size=${size}`
    )
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return { data: [] };
    });

// 요청이 실패하면 undefined, 성공하면 TripDataType, get 함수 호출에 실패하면 EtcListType 반환
export const RestaurantListSelector = selector<
  TripDataType | { data: never[] }
>({
  key: "RestaurantListSelector",
  get: async () => {
    // console.log('들어옴!!');
    try {
      const response = await getRestaurantListData(1, 10000, 0, 10);
      // console.log(response)
      // console.log('들어오나?')
      return response;
    } catch (err) {
      console.log(err);
      return { data: [] };
    }
  },
  // filtering 부분.. 넣을 자리
});
