import { selectorFamily, SerializableParam } from "recoil";
import { getRecEtcApi } from "./Api";
import { RecListType, recommendListType } from "../types/recListTypes";

interface getRecListSelectorProps {
  titleType: string;
  recentContentId: number;
  [key: string]: SerializableParam;
}

// // 식당&숙박 추천 목록 가져오는 selector
export const getRecListSelector = selectorFamily<
  RecListType,
  getRecListSelectorProps
>({
  key: "getRecListSelector",
  get:
    ({ titleType, recentContentId }) =>
    async () => {
      try {
        const response = await getRecEtcApi(titleType, recentContentId);
        // console.log(response.data.contents);
        return response.data.contents.map((item: recommendListType) => ({
          ...item,
          category: titleType,
        }));
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
});

// interface getRecEntertainmentListSelectorProps {
//   contentTypeId: number;
//   [key: string]: SerializableParam;
// }

// // 즐길거리 추천 목록 가져오는 selector
// export const getRecEntertainmentListSelector = selectorFamily<
//   recommendListType,
//   getRecEntertainmentListSelectorProps
// >({
//   key: "getRecEntertainmentListSelector",
//   get:
//     () =>
//     async () => {
//       try {
//         const response = await getRecEntertainmentApi();
//         console.log(response.data);
//         const data = await response.data;
//         return data;
//       } catch (error) {
//         console.error(error);
//         throw error;
//       }
//     },
// });
