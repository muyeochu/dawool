import { BookmarkType } from "../types/BookmarkTypes";
import { bookmarkApi } from "../recoil/Api";

export const bookmark = (place: BookmarkType): Promise<any> => 
  bookmarkApi(place)
    .then((res) => {
      console.log(res.data.liked);
      return res.data.liked;
    })
    .catch((err) => {
      console.log(err);
    });
