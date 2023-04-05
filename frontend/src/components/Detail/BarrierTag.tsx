import React from "react";
import useModal from "../utils/useModal";

import { InfoBox, BarrierContainer, BarrierBtnContainer } from "./styles";
import DetailBtn from "../common/DetailBtn";

interface BarrierInfoTypes {
  [key: string]: string;
}

const BarrierFields: BarrierInfoTypes = {
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
};

const newBarrierInfo: { [key: string]: string } = {};

const BarrierTag = ({ barrierInfo }: { barrierInfo: BarrierInfoTypes }) => {
  // 모달창
  const { openModal, closeModal } = useModal();

  // 배리어 데이터를 새 배열로 정리하기 위한 작업
  const barrierKeys = Object.keys(barrierInfo);
  const fieldKeys = Object.keys(BarrierFields);

  barrierKeys.forEach((barrierKey: string) => {
    fieldKeys.forEach((fieldKey: string) => {
      if (barrierKey === fieldKey) {
        newBarrierInfo[BarrierFields[fieldKey]] = barrierInfo[barrierKey];
      }
    });
  });

  const isEmpty = Object.values(newBarrierInfo).every((value) => value === "");
  console.log("맞냐고ㅡㅡ", isEmpty);

  return (
    <BarrierContainer>
      <p>무장애 정보</p>
      <p className="exp">
        각 태그를 클릭하면 자세한 정보를 확인할 수 있습니다.
      </p>
      <InfoBox className="barrier">
        <BarrierBtnContainer>
          {isEmpty ? (
            <>
              <p className="no">무장애 정보가 없습니다.</p>
            </>
          ) : (
            <>
              {Object.entries(newBarrierInfo).map(([key, value], index) =>
                value.length > 0 ? (
                  <DetailBtn
                    key={key + index}
                    type={"info"}
                    text={key}
                    onClick={() => {
                      openModal({
                        type: "barrier",
                        title: key,
                        content: value,
                      });
                    }}
                  />
                ) : (
                  <React.Fragment key={key + index} />
                )
              )}
            </>
          )}
        </BarrierBtnContainer>
      </InfoBox>
    </BarrierContainer>
  );
};

export default BarrierTag;
