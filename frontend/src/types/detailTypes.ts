export interface CommonDataTypes {
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
}

export interface SpecialDataTypes {
  [key: string]: any;
}

export interface BarrierDataTypes {
  parking: string;
  route: string;
  publicTransport: string;
  ticketOffice: string;
  promotion: string;
  wheelchair: string;
  exit: string;
  elevator: string;
  restroom: string;
  auditorium: string;
  room: string;
  handicapEtc: string;
  braileBlock: string;
  helpDog: string;
  guideHuman: string;
  audioGuide: string;
  bigPrint: string;
  brailePromotion: string;
  guideSystem: string;
  blindHandicapEtc: string;
  signGuide: string;
  videoGuide: string;
  hearingRoom: string;
  hearingHandicapEtc: string;
  stroller: string;
  lactationRoom: string;
  babySpareChair: string;
  infantsFamilyEtc: string;
}

export interface DetailInfoTypes {
  info: any;
  barrier: BarrierDataTypes;
}
