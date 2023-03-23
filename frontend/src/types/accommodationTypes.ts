export interface accommodationFieldTypes {
  [key: string]: string;
}

export interface acccommodationTypes {
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
