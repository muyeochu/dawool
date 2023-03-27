import { atom, selector, selectorFamily, SerializableParam } from "recoil";

import { getDetailApi } from "./Api";

import { DetailCommonTypes } from "../types/accommodationTypes";

interface ParamTypes {
  contentId: any;
  location: number;
  [key: string]: SerializableParam;
}

export const getDataSelector = selectorFamily<DetailCommonTypes, ParamTypes>({
  key: "getDataSelector",
  get:
    ({ contentId, location }) =>
    async () => {
      try {
        const response = await getDetailApi(contentId, location);
        const data = await response.data;
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
});
