import { atom } from "recoil";

interface ListBarrierTypes {
  barrier: string;
}

// 목록 무장애 태그 상태관리
export const listBarrierState = atom<ListBarrierTypes>({
  key: "listBarrierState",
  default: {
    barrier: "00000"
  }
})

// titleType에 따른 contentTypeId 반환하는 함수
export const getContentTypeId = (titleType: string) => {
  switch (titleType) {
    case "restaurant":
      return 39;
    case "accommodation":
      return 32;
    case "tourSpot":
      return 12;
    case "culture":
      return 14;
    case "leports":
      return 28;
    case "shopping":
      return 38;
    default:
      throw new Error(`Invalid titleType: ${titleType}`);
  }
};