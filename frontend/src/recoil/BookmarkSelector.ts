// import { BookmarkType } from "../types/bookmarkTypes";
import { BookmarkType } from "../types/BookmarkTypes";
import { bookmarkApi } from "../recoil/Api";

// 북마크 저장 및 해제
export const bookmark = (place: BookmarkType): Promise<boolean> =>
  bookmarkApi(place)
    .then((res) => {
      return res.data.liked;
    })
    .catch((err) => {
      console.log(err);
    });
