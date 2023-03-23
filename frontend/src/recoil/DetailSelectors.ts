import { atom, selector, selectorFamily, SerializableParam } from "recoil";
import axios from "axios";
import { DetailInfoState } from "./DetailState";
import { customAxios } from "./customAxios";

import { DetailInfoTypes } from "../types/detailTypes";

import { getDetailApi } from "./Api";

import { temptTypes } from "../components/Detail";

interface ParamType {
  contentId: number;
  location: number;
  [key: string]: SerializableParam;
}

interface temptDataType {
  [key: string]: any;
}

export const getDataSelector = selectorFamily<temptTypes, ParamType>({
  key: "getDataSelector",
  get:
    ({ contentId, location }) =>
    async () => {
      try {
        const response = await getDetailApi(contentId, location);
        const data = await response.data;
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
});
