import { ListType } from "../types/courseListTypes";
import { customAxios } from "../recoil/customAxios";

export const getCourseListData = (Id: number): Promise<ListType[]> =>
  customAxios
    .get(`user/my-course/${Id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
