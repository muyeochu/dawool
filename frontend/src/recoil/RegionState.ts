import { atom } from "recoil";
import { City, District } from "../types/cityTypes";

// 광역시도
const cities: City[] = [
  { id: 1, name: "서울특별시" },
  { id: 2, name: "인천광역시" },
  { id: 3, name: "대전광역시" },
  { id: 4, name: "대구광역시" },
  { id: 5, name: "광주광역시" },
  { id: 6, name: "부산광역시" },
  { id: 7, name: "울산광역시" },
  { id: 8, name: "세종특별자치시" },
  { id: 31, name: "경기도" },
  { id: 32, name: "강원도" },
  { id: 33, name: "충청북도" },
  { id: 34, name: "충청남도" },
  { id: 35, name: "경상북도" },
  { id: 36, name: "경상남도" },
  { id: 37, name: "전라북도" },
  { id: 38, name: "전라남도" },
  { id: 39, name: "제주도" },
];

// 시군구
const districts: District[] = [
  {
    id: 1,
    name: "강남구",
    cityId: 1,
  },
  {
    id: 2,
    name: "강동구",
    cityId: 1,
  },
  {
    id: 3,
    name: "강북구",
    cityId: 1,
  },
  {
    id: 4,
    name: "강서구",
    cityId: 1,
  },
  {
    id: 5,
    name: "관악구",
    cityId: 1,
  },
  {
    id: 6,
    name: "광진구",
    cityId: 1,
  },
  {
    id: 7,
    name: "구로구",
    cityId: 1,
  },
  {
    id: 8,
    name: "금천구",
    cityId: 1,
  },
  {
    id: 9,
    name: "노원구",
    cityId: 1,
  },
  {
    id: 10,
    name: "도봉구",
    cityId: 1,
  },
  {
    id: 11,
    name: "동대문구",
    cityId: 1,
  },
  {
    id: 12,
    name: "동작구",
    cityId: 1,
  },
  {
    id: 13,
    name: "마포구",
    cityId: 1,
  },
  {
    id: 14,
    name: "서대문구",
    cityId: 1,
  },
  {
    id: 15,
    name: "서초구",
    cityId: 1,
  },
  {
    id: 16,
    name: "성동구",
    cityId: 1,
  },
  {
    id: 17,
    name: "성북구",
    cityId: 1,
  },
  {
    id: 18,
    name: "송파구",
    cityId: 1,
  },
  {
    id: 19,
    name: "양천구",
    cityId: 1,
  },
  {
    id: 20,
    name: "영등포구",
    cityId: 1,
  },
  {
    id: 21,
    name: "용산구",
    cityId: 1,
  },
  {
    id: 22,
    name: "은평구",
    cityId: 1,
  },
  {
    id: 23,
    name: "종로구",
    cityId: 1,
  },
  {
    id: 24,
    name: "중구",
    cityId: 1,
  },
  {
    id: 25,
    name: "중랑구",
    cityId: 1,
  },
  {
    id: 1,
    name: "강화군",
    cityId: 2,
  },
  {
    id: 2,
    name: "계양구",
    cityId: 2,
  },
  {
    id: 3,
    name: "미추홀구",
    cityId: 2,
  },
  {
    id: 4,
    name: "남동구",
    cityId: 2,
  },
  {
    id: 5,
    name: "동구",
    cityId: 2,
  },
  {
    id: 6,
    name: "부평구",
    cityId: 2,
  },
  {
    id: 7,
    name: "서구",
    cityId: 2,
  },
  {
    id: 8,
    name: "연수구",
    cityId: 2,
  },
  {
    id: 9,
    name: "옹진군",
    cityId: 2,
  },
  {
    id: 10,
    name: "중구",
    cityId: 2,
  },
  {
    id: 1,
    name: "대덕구",
    cityId: 3,
  },
  {
    id: 2,
    name: "동구",
    cityId: 3,
  },
  {
    id: 3,
    name: "서구",
    cityId: 3,
  },
  {
    id: 4,
    name: "유성구",
    cityId: 3,
  },
  {
    id: 5,
    name: "중구",
    cityId: 3,
  },
  {
    id: 1,
    name: "남구",
    cityId: 4,
  },
  {
    id: 2,
    name: "달서구",
    cityId: 4,
  },
  {
    id: 3,
    name: "달성군",
    cityId: 4,
  },
  {
    id: 4,
    name: "동구",
    cityId: 4,
  },
  {
    id: 5,
    name: "북구",
    cityId: 4,
  },
  {
    id: 6,
    name: "서구",
    cityId: 4,
  },
  {
    id: 7,
    name: "수성구",
    cityId: 4,
  },
  {
    id: 8,
    name: "중구",
    cityId: 4,
  },
  {
    id: 1,
    name: "광산구",
    cityId: 5,
  },
  {
    id: 2,
    name: "남구",
    cityId: 5,
  },
  {
    id: 3,
    name: "동구",
    cityId: 5,
  },
  {
    id: 4,
    name: "북구",
    cityId: 5,
  },
  {
    id: 5,
    name: "서구",
    cityId: 5,
  },
  {
    id: 1,
    name: "강서구",
    cityId: 6,
  },
  {
    id: 2,
    name: "금정구",
    cityId: 6,
  },
  {
    id: 3,
    name: "기장군",
    cityId: 6,
  },
  {
    id: 4,
    name: "남구",
    cityId: 6,
  },
  {
    id: 5,
    name: "동구",
    cityId: 6,
  },
  {
    id: 6,
    name: "동래구",
    cityId: 6,
  },
  {
    id: 7,
    name: "부산진구",
    cityId: 6,
  },
  {
    id: 8,
    name: "북구",
    cityId: 6,
  },
  {
    id: 9,
    name: "사상구",
    cityId: 6,
  },
  {
    id: 10,
    name: "사하구",
    cityId: 6,
  },
  {
    id: 11,
    name: "서구",
    cityId: 6,
  },
  {
    id: 12,
    name: "수영구",
    cityId: 6,
  },
  {
    id: 13,
    name: "연제구",
    cityId: 6,
  },
  {
    id: 14,
    name: "영도구",
    cityId: 6,
  },
  {
    id: 15,
    name: "중구",
    cityId: 6,
  },
  {
    id: 16,
    name: "해운대구",
    cityId: 6,
  },
  {
    id: 1,
    name: "중구",
    cityId: 7,
  },
  {
    id: 2,
    name: "남구",
    cityId: 7,
  },
  {
    id: 3,
    name: "동구",
    cityId: 7,
  },
  {
    id: 4,
    name: "북구",
    cityId: 7,
  },
  {
    id: 5,
    name: "울주군",
    cityId: 7,
  },
  {
    id: 1,
    name: "세종특별자치시",
    cityId: 8,
  },
  {
    id: 1,
    name: "가평군",
    cityId: 31,
  },
  {
    id: 2,
    name: "고양시",
    cityId: 31,
  },
  {
    id: 3,
    name: "과천시",
    cityId: 31,
  },
  {
    id: 4,
    name: "광명시",
    cityId: 31,
  },
  {
    id: 5,
    name: "광주시",
    cityId: 31,
  },
  {
    id: 6,
    name: "구리시",
    cityId: 31,
  },
  {
    id: 7,
    name: "군포시",
    cityId: 31,
  },
  {
    id: 8,
    name: "김포시",
    cityId: 31,
  },
  {
    id: 9,
    name: "남양주시",
    cityId: 31,
  },
  {
    id: 10,
    name: "동두천시",
    cityId: 31,
  },
  {
    id: 11,
    name: "부천시",
    cityId: 31,
  },
  {
    id: 12,
    name: "성남시",
    cityId: 31,
  },
  {
    id: 13,
    name: "수원시",
    cityId: 31,
  },
  {
    id: 14,
    name: "시흥시",
    cityId: 31,
  },
  {
    id: 15,
    name: "안산시",
    cityId: 31,
  },
  {
    id: 16,
    name: "안성시",
    cityId: 31,
  },
  {
    id: 17,
    name: "안양시",
    cityId: 31,
  },
  {
    id: 18,
    name: "양주시",
    cityId: 31,
  },
  {
    id: 19,
    name: "양평군",
    cityId: 31,
  },
  {
    id: 20,
    name: "여주시",
    cityId: 31,
  },
  {
    id: 21,
    name: "연천군",
    cityId: 31,
  },
  {
    id: 22,
    name: "오산시",
    cityId: 31,
  },
  {
    id: 23,
    name: "용인시",
    cityId: 31,
  },
  {
    id: 24,
    name: "의왕시",
    cityId: 31,
  },
  {
    id: 25,
    name: "의정부시",
    cityId: 31,
  },
  {
    id: 26,
    name: "이천시",
    cityId: 31,
  },
  {
    id: 27,
    name: "파주시",
    cityId: 31,
  },
  {
    id: 28,
    name: "평택시",
    cityId: 31,
  },
  {
    id: 29,
    name: "포천시",
    cityId: 31,
  },
  {
    id: 30,
    name: "하남시",
    cityId: 31,
  },
  {
    id: 31,
    name: "화성시",
    cityId: 31,
  },
  {
    id: 1,
    name: "강릉시",
    cityId: 32,
  },
  {
    id: 2,
    name: "고성군",
    cityId: 32,
  },
  {
    id: 3,
    name: "동해시",
    cityId: 32,
  },
  {
    id: 4,
    name: "삼척시",
    cityId: 32,
  },
  {
    id: 5,
    name: "속초시",
    cityId: 32,
  },
  {
    id: 6,
    name: "양구군",
    cityId: 32,
  },
  {
    id: 7,
    name: "양양군",
    cityId: 32,
  },
  {
    id: 8,
    name: "영월군",
    cityId: 32,
  },
  {
    id: 9,
    name: "원주시",
    cityId: 32,
  },
  {
    id: 10,
    name: "인제군",
    cityId: 32,
  },
  {
    id: 11,
    name: "정선군",
    cityId: 32,
  },
  {
    id: 12,
    name: "철원군",
    cityId: 32,
  },
  {
    id: 13,
    name: "춘천시",
    cityId: 32,
  },
  {
    id: 14,
    name: "태백시",
    cityId: 32,
  },
  {
    id: 15,
    name: "평창군",
    cityId: 32,
  },
  {
    id: 16,
    name: "홍천군",
    cityId: 32,
  },
  {
    id: 17,
    name: "화천군",
    cityId: 32,
  },
  {
    id: 18,
    name: "횡성군",
    cityId: 32,
  },
  {
    id: 1,
    name: "괴산군",
    cityId: 33,
  },
  {
    id: 2,
    name: "단양군",
    cityId: 33,
  },
  {
    id: 3,
    name: "보은군",
    cityId: 33,
  },
  {
    id: 4,
    name: "영동군",
    cityId: 33,
  },
  {
    id: 5,
    name: "옥천군",
    cityId: 33,
  },
  {
    id: 6,
    name: "음성군",
    cityId: 33,
  },
  {
    id: 7,
    name: "제천시",
    cityId: 33,
  },
  {
    id: 8,
    name: "진천군",
    cityId: 33,
  },
  {
    id: 9,
    name: "청원군",
    cityId: 33,
  },
  {
    id: 10,
    name: "청주시",
    cityId: 33,
  },
  {
    id: 11,
    name: "충주시",
    cityId: 33,
  },
  {
    id: 12,
    name: "증평군",
    cityId: 33,
  },
  {
    id: 1,
    name: "공주시",
    cityId: 34,
  },
  {
    id: 2,
    name: "금산군",
    cityId: 34,
  },
  {
    id: 3,
    name: "논산시",
    cityId: 34,
  },
  {
    id: 4,
    name: "당진시",
    cityId: 34,
  },
  {
    id: 5,
    name: "보령시",
    cityId: 34,
  },
  {
    id: 6,
    name: "부여군",
    cityId: 34,
  },
  {
    id: 7,
    name: "서산시",
    cityId: 34,
  },
  {
    id: 8,
    name: "서천군",
    cityId: 34,
  },
  {
    id: 9,
    name: "아산시",
    cityId: 34,
  },
  {
    id: 11,
    name: "예산군",
    cityId: 34,
  },
  {
    id: 12,
    name: "천안시",
    cityId: 34,
  },
  {
    id: 13,
    name: "청양군",
    cityId: 34,
  },
  {
    id: 14,
    name: "태안군",
    cityId: 34,
  },
  {
    id: 15,
    name: "홍성군",
    cityId: 34,
  },
  {
    id: 16,
    name: "계룡시",
    cityId: 34,
  },
  {
    id: 1,
    name: "경산시",
    cityId: 35,
  },
  {
    id: 2,
    name: "경주시",
    cityId: 35,
  },
  {
    id: 3,
    name: "고령군",
    cityId: 35,
  },
  {
    id: 4,
    name: "구미시",
    cityId: 35,
  },
  {
    id: 5,
    name: "군위군",
    cityId: 35,
  },
  {
    id: 6,
    name: "김천시",
    cityId: 35,
  },
  {
    id: 7,
    name: "문경시",
    cityId: 35,
  },
  {
    id: 8,
    name: "봉화군",
    cityId: 35,
  },
  {
    id: 9,
    name: "상주시",
    cityId: 35,
  },
  {
    id: 10,
    name: "성주군",
    cityId: 35,
  },
  {
    id: 11,
    name: "안동시",
    cityId: 35,
  },
  {
    id: 12,
    name: "영덕군",
    cityId: 35,
  },
  {
    id: 13,
    name: "영양군",
    cityId: 35,
  },
  {
    id: 14,
    name: "영주시",
    cityId: 35,
  },
  {
    id: 15,
    name: "영천시",
    cityId: 35,
  },
  {
    id: 16,
    name: "예천군",
    cityId: 35,
  },
  {
    id: 17,
    name: "울릉군",
    cityId: 35,
  },
  {
    id: 18,
    name: "울진군",
    cityId: 35,
  },
  {
    id: 19,
    name: "의성군",
    cityId: 35,
  },
  {
    id: 20,
    name: "청도군",
    cityId: 35,
  },
  {
    id: 21,
    name: "청송군",
    cityId: 35,
  },
  {
    id: 22,
    name: "칠곡군",
    cityId: 35,
  },
  {
    id: 23,
    name: "포항시",
    cityId: 35,
  },
  {
    id: 1,
    name: "거제시",
    cityId: 36,
  },
  {
    id: 2,
    name: "거창군",
    cityId: 36,
  },
  {
    id: 3,
    name: "고성군",
    cityId: 36,
  },
  {
    id: 4,
    name: "김해시",
    cityId: 36,
  },
  {
    id: 5,
    name: "남해군",
    cityId: 36,
  },
  {
    id: 6,
    name: "마산시",
    cityId: 36,
  },
  {
    id: 7,
    name: "밀양시",
    cityId: 36,
  },
  {
    id: 8,
    name: "사천시",
    cityId: 36,
  },
  {
    id: 9,
    name: "산청군",
    cityId: 36,
  },
  {
    id: 10,
    name: "양산시",
    cityId: 36,
  },
  {
    id: 12,
    name: "의령군",
    cityId: 36,
  },
  {
    id: 13,
    name: "진주시",
    cityId: 36,
  },
  {
    id: 14,
    name: "진해시",
    cityId: 36,
  },
  {
    id: 15,
    name: "창녕군",
    cityId: 36,
  },
  {
    id: 16,
    name: "창원시",
    cityId: 36,
  },
  {
    id: 17,
    name: "통영시",
    cityId: 36,
  },
  {
    id: 18,
    name: "하동군",
    cityId: 36,
  },
  {
    id: 19,
    name: "함안군",
    cityId: 36,
  },
  {
    id: 20,
    name: "함양군",
    cityId: 36,
  },
  {
    id: 21,
    name: "합천군",
    cityId: 36,
  },
  {
    id: 1,
    name: "고창군",
    cityId: 37,
  },
  {
    id: 2,
    name: "군산시",
    cityId: 37,
  },
  {
    id: 3,
    name: "김제시",
    cityId: 37,
  },
  {
    id: 4,
    name: "남원시",
    cityId: 37,
  },
  {
    id: 5,
    name: "무주군",
    cityId: 37,
  },
  {
    id: 6,
    name: "부안군",
    cityId: 37,
  },
  {
    id: 7,
    name: "순창군",
    cityId: 37,
  },
  {
    id: 8,
    name: "완주군",
    cityId: 37,
  },
  {
    id: 9,
    name: "익산시",
    cityId: 37,
  },
  {
    id: 10,
    name: "임실군",
    cityId: 37,
  },
  {
    id: 11,
    name: "장수군",
    cityId: 37,
  },
  {
    id: 12,
    name: "전주시",
    cityId: 37,
  },
  {
    id: 13,
    name: "정읍시",
    cityId: 37,
  },
  {
    id: 14,
    name: "진안군",
    cityId: 37,
  },
  {
    id: 1,
    name: "강진군",
    cityId: 38,
  },
  {
    id: 2,
    name: "고흥군",
    cityId: 38,
  },
  {
    id: 3,
    name: "곡성군",
    cityId: 38,
  },
  {
    id: 4,
    name: "광양시",
    cityId: 38,
  },
  {
    id: 5,
    name: "구례군",
    cityId: 38,
  },
  {
    id: 6,
    name: "나주시",
    cityId: 38,
  },
  {
    id: 7,
    name: "담양군",
    cityId: 38,
  },
  {
    id: 8,
    name: "목포시",
    cityId: 38,
  },
  {
    id: 9,
    name: "무안군",
    cityId: 38,
  },
  {
    id: 10,
    name: "보성군",
    cityId: 38,
  },
  {
    id: 11,
    name: "순천시",
    cityId: 38,
  },
  {
    id: 12,
    name: "신안군",
    cityId: 38,
  },
  {
    id: 13,
    name: "여수시",
    cityId: 38,
  },
  {
    id: 16,
    name: "영광군",
    cityId: 38,
  },
  {
    id: 17,
    name: "영암군",
    cityId: 38,
  },
  {
    id: 18,
    name: "완도군",
    cityId: 38,
  },
  {
    id: 19,
    name: "장성군",
    cityId: 38,
  },
  {
    id: 20,
    name: "장흥군",
    cityId: 38,
  },
  {
    id: 21,
    name: "진도군",
    cityId: 38,
  },
  {
    id: 22,
    name: "함평군",
    cityId: 38,
  },
  {
    id: 23,
    name: "해남군",
    cityId: 38,
  },
  {
    id: 24,
    name: "화순군",
    cityId: 38,
  },
  {
    id: 1,
    name: "남제주군",
    cityId: 39,
  },
  {
    id: 2,
    name: "북제주군",
    cityId: 39,
  },
  {
    id: 3,
    name: "서귀포시",
    cityId: 39,
  },
  {
    id: 4,
    name: "제주시",
    cityId: 39,
  },
];

export const cityState = atom({
  key: "cityState",
  default: cities,
});

export const districtState = atom({
  key: "districtState",
  default: districts,
});
