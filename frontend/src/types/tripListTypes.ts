import React from "react";

export interface TripListTitleType {
  titleType:
    | "restaurant"
    | "accommodation"
    | "tourSpot"
    | "culture"
    | "leports"
    | "shopping"
    | "etc";
}

// 목록 데이터 타입
export interface ListType {
  spotId: string;
  contentId: number;
  contentTypeId: number;
  title: string;
  imageUrl: string;
  category: string;
  deaf: number;
  visuallyImpaired: number;
  mobilityWeak: number;
  old: number;
  infant: number;
  liked: boolean;
}

// 즐길거리 목록 혹은 식당(or 숙박) 목록
// export type TripDataType = {
//   data: (ListType)[];
// };
