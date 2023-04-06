import { BookmarkType } from "../types/BookmarkTypes";
import { bookmarkApi } from "../recoil/Api";
import { getBookmarkListApi } from "../recoil/Api";
import { selectorFamily, SerializableParam } from "recoil";

// interface BookmarkItemType extends BookmarkType {
//   liked: boolean;
// }

// interface ParamTypes {
//   page: number;
//   size: number;
//   [key: string]: SerializableParam;
// }

// 북마크 저장 및 해제
export const bookmark = (place: BookmarkType): Promise<boolean> =>
  bookmarkApi(place)
    .then((res) => {
      console.log(res.data.liked);
      return res.data.liked;
    })
    .catch((err) => {
      console.log(err);
    });

// // 북마크 목록
// export const bookmarkList = selectorFamily<BookmarkItemType[], ParamTypes>({
//   key: "bookmarkList",
//   get:
//     ({ page, size }) =>
//     async ({ get }) => {
//       const response = await getBookmarkListApi({page, size});
//       console.log(response.data);
//       return response.data.contents;
//     },
// });
