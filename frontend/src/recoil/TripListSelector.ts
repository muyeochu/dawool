import { atom, selector } from "recoil";
import axios from "axios";
import { customAxios } from "./customAxios";
import { ListType, TripDataType } from "../types/tripListTypes";

const getTripListData = (
  contentTypeId: number,
  area: number,
  barrier: number,
  page: number,
  size: number
): Promise<TripDataType> =>
  customAxios
    .get(
      `location/list/${contentTypeId}?area=${area}&barrier=${barrier}&page=${page}&size=${size}`
    )
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });

// 요청이 실패하면 undefined, 성공하면 TripDataType, get 함수 호출에 실패하면 EtcListType 반환
export const TripListSelector = selector<TripDataType>({
  key: "TripListSelector",
  get: async () => {
    console.log("들어옴!!");
    try {
      // 수정해야 할 부분..!! (일단 임시)
      const [restaurantList, accommodationList] = await Promise.all([
        getTripListData(39, 1, 10000, 0, 10),
        getTripListData(32, 1, 10000, 0, 10),
      ]);

      console.log("식당 list!");
      console.log(restaurantList.contents);
      console.log("숙박 list!");
      console.log(accommodationList.contents);
      console.log("들어오나?");

      return { data: [...restaurantList.contents, ...accommodationList.contents] };
    } catch (err) {
      console.log(err);
      return { data: [] };
    }
  },
  // filtering 부분.. 넣을 자리
});
