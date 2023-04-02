import React from "react";

// 각 관광지 타입 정보
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

export const titleTypeMap: Record<number, TripListTitleType> = [
  { contentTypeId: 39, titleType: "restaurant", typeText: "식당" },
  { contentTypeId: 32, titleType: "accommodation", typeText: "숙박" },
  { contentTypeId: 12, titleType: "tourSpot", typeText: "관광지" },
  { contentTypeId: 14, titleType: "culture", typeText: "문화시설" },
  { contentTypeId: 28, titleType: "leports", typeText: "레포츠" },
  { contentTypeId: 38, titleType: "shopping", typeText: "쇼핑" },
]

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
  liked?: boolean;
}
