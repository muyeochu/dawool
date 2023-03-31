import { selectorFamily, SerializableParam, selector } from "recoil";
import { postSurveyApi } from "./Api";
import { finalFirstState, secondState, thirdState, fourthState, fifthState } from "./SurveyState";

// type PostSurveyParams = {
//   finalFirstState: any;
//   secondState: any;
//   thirdState: any;
//   fourthState: any;
//   fifthState: any[];
// };

// export const postSurveySelector = selector({
//   key: "postSurveySelector",
//   get: (params: PostSurveyParams) => async () => {
//     console.log("시작시작!!!")
//     try {
//       const response = await postSurveyApi(params);
//       console.log("성공!", response.data);
//       return response.data;
//     } catch (error) {
//       console.log("코드 수정")
//       console.error(error);
//       throw error;
//     }
//   },
// });
