import React from "react";

export interface TripListTitleType {
  contentTypeId: number;
  titleType:
    | "restaurant"
    | "accommodation"
    | "tourSpot"
    | "culture"
    | "leports"
    | "shopping";
  typeText: string;
  
}

const titleTypeMap: Record<number, TripListTitleType> = {
  39: { contentTypeId: 39, titleType: "restaurant", typeText: "식당" },
  32: { contentTypeId: 32, titleType: "accommodation", typeText: "숙박" },
  12: { contentTypeId: 12, titleType: "tourSpot", typeText: "관광지" },
  14: { contentTypeId: 14, titleType: "culture", typeText: "문화시설" },
  28: { contentTypeId: 28, titleType: "leports", typeText: "레포츠" },
  38: { contentTypeId: 38, titleType: "shopping", typeText: "쇼핑" },
};

export const getListTitleType = (contentTypeId: number): TripListTitleType =>
  titleTypeMap[contentTypeId];

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
