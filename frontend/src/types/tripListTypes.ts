import React from "react";

// 공통 항목
export interface ListType {
  contentId: number;
  contenttypeId: number;
  imageUrl: string;
  title: string;
  isLiked: boolean;
}

// 즐길거리 목록
export type EntertainmentListType = ListType & {
  spotId: string;
};

// 즐길거리 목록 혹은 식당(or 숙박) 목록
export type TripDataType = {
  data: (EntertainmentListType | ListType)[];
};
