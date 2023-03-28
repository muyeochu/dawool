import {useEffect} from "react";

import { FolderState } from "../../../../../recoil/CourseFolderState";
import { useRecoilState,selector, useRecoilValue } from "recoil";
import { getCourseListData } from "../../../../../recoil/CourseListSelectors";
import { ListType } from "../../../../../types/courseListTypes";

export const CourseList = ()=>{
    const [folderState] = useRecoilState(FolderState);
    const Id = Number(folderState.courseId);
    //파일 리스트 불러오기
    //메모는 어디넣지?
    const CourseListSelector = selector<ListType[]>({
        key:"CourseListSelector",
        get : async ()=>{
            try{
                const courseList = await getCourseListData(Id);
                return courseList;
            }catch(err){
                throw err;
            }
        },
    });
    let courseLists = useRecoilValue<ListType[]>(CourseListSelector);
    // useEffect(()=>{
        
    // },[]);
    return(
     <div> 
        {
            courseLists.map((item)=>(
                <>
                {console.log(item)}
                </>
            ))
        }
     </div>   
    )
}