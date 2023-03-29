import { ListType } from "../types/courseListTypes";
import { customAxios } from "../recoil/customAxios";
import { selector } from "recoil";

    //파일 리스트 불러오기
    //메모는 어디넣지?
export const getCourseListData = (
    Id:number
):Promise<ListType[]> =>
customAxios.get(`user/my-course/${Id}`)
.then((res)=>{
    console.log(res);
    return res.data;
}).catch((err)=>{
    console.log(err);
});
