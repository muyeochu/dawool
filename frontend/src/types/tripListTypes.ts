import React from "react";

// 즐길거리(관광지, 문화시설, 레포츠, 쇼핑) 목록
export type EntertainmentListType = {
  spotId: String;
  contentId: String;
  contenttypeId: Number;
  imageUrl: String;
  title: String;
  isLiked: Boolean;
};

// 숙박, 식당 목록
export type EtcListType = {
  contentId: Number;
  contenttypeId: Number;
  imageUrl: String;
  title: String;
  isLiked: Boolean;
};