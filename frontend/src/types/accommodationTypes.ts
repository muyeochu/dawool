// 타입 시체들..

export interface accommodationFieldTypes1 {
  [key: string]: string;
}

export interface accommodationTypes2 {
  checkInTime: string | null;
  checkOutTime: string | null;
  isCooking: string | null;
  foodPlace: string | null;
  hanok: number | null;
  infoCenter: string;
  commonParking: string;
  pickup: string;
  reservationUrl: string;
  subFacility: string;
  barbecue: number | null;
  fitness: number | null;
  beverage: number | null;
  bicycle: number | null;
  campfire: number | null;
  karaoke: number | null;
  publicBath: number | null;
  publicPc: number | null;
  sauna: number | null;
  sports: number | null;
  refundRegulation: string;
}

interface accommodationFieldTypes3 {
  checkInTime: "입실 시간";
  checkOutTime: "퇴실 시간";
  isCooking: "취사 여부";
  foodPlace: "식음료장";
  hanok: "한옥 여부";
  infoCenter: "문의 및 안내";
  commonParking: "주차 시설";
  pickup: "픽업 서비스";
  reservationUrl: "예약 안내 홈페이지";
  subFacility: "부대 시설";
  barbecue: "바베큐장";
  fitness: "휘트니스 센터";
  beverage: "음료";
  bicycle: "자전거 대여";
  campfire: "캠프파이어";
  karaoke: "노래방";
  publicBath: "공용 샤워실";
  publicPc: "공용 PC방";
  sauna: "사우나실";
  sports: "스포츠 시설";
  refundRegulation: "환불 규정";
}

export interface accommodationTypes {
  myData: {
    info: {
      [key: string]: any;
      contentId: number;
      title: string;
      homepage: string;
      firstImage: string;
      areaCode: number;
      addr1: string;
      mapX: number;
      mapY: number;
      mlevel: number;
      category: string;
      isLiked: boolean;
      hit: number;
      deaf: number;
      visuallyImpaired: number;
      mobilityWeak: number;
      old: number;
      infant: number;
      barrier: {
        parking?: string;
        route?: string;
        publicTransport?: string;
        ticketOffice?: string;
        promotion?: string;
        wheelchair?: string;
        exit?: string;
        elevator?: string;
        restroom?: string;
        auditorium?: string;
        room?: string;
        handicapEtc?: string;
        braileBlock?: string;
        helpDog?: string;
        guideHuman?: string;
        audioGuide?: string;
        bigPrint?: string;
        brailePromotion?: string;
        guideSystem?: string;
        blindHandicapEtc?: string;
        signGuide?: string;
        videoGuide?: string;
        hearingRoom?: string;
        hearingHandicapEtc?: string;
        stroller?: string;
        lactationRoom?: string;
        babySpareChair?: string;
        infantsFamilyEtc?: string;
      };
    };
  };
}
