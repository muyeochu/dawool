import { atom, selector } from "recoil";
import axios from "axios";
import { customAxios } from "./customAxios";
import { EntertainmentListType, EtcListType } from "../types/tripListTypes";

// const getAccomodationListData = () => customAxios.get("location/list/32");

const getRestaurantListData = (): Promise<EtcListType[]> =>
  customAxios
    .get<EtcListType[]>("location/list/39")
    .then((response) => response.data);

export const RestaurantListSelector = selector<EtcListType[]>({
  key: 'RestaurantListSelector',
  get: async () => {
    console.log('들어옴!!');
    try {
      const response = await getRestaurantListData();
      return response;
    } catch (err) {
      console.log(err)
      return [];
    }
  },
  // filtering 부분.. 넣을 자리
})