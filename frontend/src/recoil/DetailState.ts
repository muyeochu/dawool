import { atom } from "recoil";
import { DetailInfoTypes } from "../types/detailTypes";

export const DetailInfoState = atom<DetailInfoTypes>({
  key: "DetailInfo",
  default: undefined,
});
