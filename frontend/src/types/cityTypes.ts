// 광역시도
export interface City {
  id: number;
  name: string;
}

// 시군구
export interface District {
  id: number;
  name: string;
  cityId: number;
}