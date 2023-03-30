import { atom, selector, selectorFamily, SerializableParam } from "recoil";

import { getDetailApi } from "./Api";

import { CommonDataTypes } from "../types/detailTypes";

interface ParamTypes {
  contentId: any;
  location: number;
  [key: string]: SerializableParam;
}

export const getDataSelector = selectorFamily<CommonDataTypes, ParamTypes>({
  key: "getDataSelector",
  get:
    ({ contentId, location }) =>
    async () => {
      try {
        const response = await getDetailApi(contentId, location);
        const data = await response.data;
        console.log("상세데이터는?", data)
        console.log("상세데이터 통신됨")
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
});
