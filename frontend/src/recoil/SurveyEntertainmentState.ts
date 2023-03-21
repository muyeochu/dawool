import { atom } from "recoil";
import { SurveyEntertainment } from "../types/surveyEntertainmentTypes";

const surveyEntertainments: SurveyEntertainment[] = [
 
];

export const surveyEntertainmentState = atom({
  key: "surveyEntertainmentState",
  default: surveyEntertainments,
});
