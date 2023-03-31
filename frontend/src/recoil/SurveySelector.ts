import { selectorFamily, SerializableParam } from "recoil";
import { postSurveyApi } from "./Api";
import { finalFirstState, secondState, thirdState, fourthState, fifthState } from "./SurveyState";

type PostSurveyParams = {
  finalFirstState: string;
  secondState: string;
  thirdState: string;
  fourthState: string;
  fifthState: number[];
};

export const postSurveySelector = selectorFamily({
  key: "postSurveySelector",
  get: (params: PostSurveyParams) => async () => {
    try {
      const response = await postSurveyApi(params.finalFirstState, params.secondState, params.thirdState, params.fourthState, params.fifthState);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
});
