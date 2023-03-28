import { atom, selectorFamily, SerializableParam } from "recoil";

import { getSearchApi } from "./Api";

import { SearchDataTypes } from "../types/searchTypes";

export interface ParamTypes {
  title: string;
  type: number;
  barrier: string;
  page: number;
  size: number;
  [key: string]: SerializableParam;
}

export const searchState = atom<ParamTypes>({
  key: "searchState",
  default: {
    title: "",
    type: 0,
    barrier: "00000",
    page: 0,
    size: 20,
  },
});

export const getSearchSelector = selectorFamily<SearchDataTypes, ParamTypes>({
  key: "getSearchSelector",
  get:
    ({ title, type, barrier, page, size }) =>
    async () => {
      try {
        const response = await getSearchApi(title, type, barrier, page, size);
        const data = await response.data;
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
});
