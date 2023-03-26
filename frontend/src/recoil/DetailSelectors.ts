import { atom, selector, selectorFamily, SerializableParam } from "recoil";

import { getDetailApi } from "./Api";

import { accommodationTypes } from "../types/accommodationTypes";

interface ParamType {
  contentId: any;
  location: number;
  [key: string]: SerializableParam;
}

export const getDataSelector = selectorFamily<accommodationTypes, ParamType>({
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
