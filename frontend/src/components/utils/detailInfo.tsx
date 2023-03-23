import { dummyData } from "../Detail/dummy";

import { useRecoilValue } from "recoil";
import { Suspense, useEffect } from "react";

import { DetailInfoTypes } from "../../types/detailTypes";

const DetailInfo = () => {
  interface BarrierFieldTypes {
    [key: string]: any;
  }

  const newBarrierData: { [key: string]: any } = {};

  const testFields: BarrierFieldTypes = {
    commonInfo: {},
    specialInfo: {},
    barrierInfo: {
      parking: "주차여부",
      route: "대중교통",
      publicTransport: "접근로",
      ticketOffice: "매표소",
      promotion: "홍보물",
      wheelchair: "휠체어",
      exit: "출입통로",
      elevator: "엘리베이터",
      restroom: "화장실",
      auditorium: "관람석",
      room: "객실",
      handicapEtc: "지체장애 기타 상세",
      braileBlock: "점자블록",
      helpDog: "보조견 동반",
      guideHuman: "안내요원",
      audioGuide: "오디오 가이드",
      bigPrint: "큰 활자 홍보물",
      brailePromotion: "점자홍보물 및 점자표지판",
      guideSystem: "유도안내설비",
      blindHandicapEtc: "시각장애 기타 상세",
      signGuide: "수화 안내",
      videoGuide: "자막 비디오 가이드 및 영상자막 안내",
      hearingRoom: "청각 객실",
      hearingHandicapEtc: "청각장애 기타 상세",
      stroller: "유모차",
      lactationRoom: "수유실",
      babySpareChair: "유아용 보조의자",
      infantsFamilyEtc: "영유아가족 기타 상세",
    },
  };

  const barrierField: BarrierFieldTypes = {
    commonInfo: {},
    specialInfo: {},
    barrierInfo: {
      주차여부: "",
      대중교통: "",
      접근로: "",
      매표소: "",
      홍보물: "",
      휠체어: "",
      출입통로: "",
      엘리베이터: "",
      화장실: "",
      관람석: "",
      객실: "",
      "지체장애 기타 상세": "",
      점자블록: "",
      "보조견 동반": "",
      안내요원: "",
      "오디오 가이드": "",
      "큰 활자 홍보물": "",
      "점자홍보물 및 점자표지판": "",
      유도안내설비: "",
      "시각장애 기타 상세": "",
      "수화 안내": "",
      "자막 비디오 가이드 및 영상자막 안내": "",
      "청각 객실": "",
      "청각장애 기타 상세": "",
      유모차: "",
      수유실: "",
      "유아용 보조의자": "",
      "영유아가족 기타 상세": "",
    },
  };

  // 더미데이터 중 배리어프리 부분만
  for (let keyA in dummyData.info.barrier) {
    for (let keyB in testFields.barrierInfo) {
      if (keyA === keyB) {
        newBarrierData[testFields.barrierInfo[keyB]] =
          dummyData.info.barrier[keyA];
        break;
      }
    }
  }
  console.log(newBarrierData);

  // const myGetData = useRecoilValue(getData);
  // console.log(myGetData);

  return <div></div>;
};

export default DetailInfo;
