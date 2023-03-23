import React from "react";

// 공통 항목
export type EtcListType = {
  contentId: number;
  contenttypeId: number;
  imageUrl: string;
  title: string;
  isLiked: boolean;
};

// 즐길거리 목록
export type EntertainmentListType = EtcListType & {
  spotId: string;
};

export type TripDataType = {
  data: (EntertainmentListType | EtcListType)[];
};
