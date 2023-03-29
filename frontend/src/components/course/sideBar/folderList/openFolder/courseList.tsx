import {useEffect} from "react";

import { FolderState } from "../../../../../recoil/CourseFolderState";
import { useRecoilState,selector, useRecoilValue } from "recoil";
import { getCourseListData } from "../../../../../recoil/CourseListSelectors";
import { ListType } from "../../../../../types/courseListTypes";
import { customAxios2 } from "../../../../../recoil/customAxios";
import { createTaggedTemplate } from "typescript";
// import { FolderContainer } from "../styles";
import ReactDOM from 'react-dom';
import { AccomodationIc, CourseContainer, EntertainmentIc, RestaurantIc } from "./styles";

export const CourseList = ()=>{
    const [folderState] = useRecoilState(FolderState);
    const Id = Number(folderState.courseId);
    //파일 리스트 불러오기
    //메모는 어디넣지?
    // const CourseListSelector = selector<ListType[]>({
    //     key:"CourseListSelector",
    //     get : async ()=>{
    //         try{
    //             const courseList = await getCourseListData(Id);
    //             return courseList;
    //         }catch(err){
    //             throw err;
    //         }
    //     },
    // });
    // let courseLists = useRecoilValue<ListType[]>(CourseListSelector);
    
    const getCourseFileData = ():Promise<ListType[]>=>
    customAxios2.get(`course/${folderState.courseId}`)
    .then((res)=>{
        console.log(res);
        return res.data;
    }).catch((err)=>{
        console.log(err);
    })
    async function myFunction(){
        try{
            let courseList = await getCourseFileData();
            return courseList;
        }catch(err){
            throw err;
        }
    }

function createTag(courseList:any){
    const div = document.getElementById("myCourseInfolder");
    const div2 = document.createElement("div");
    console.log(courseList)
    for(let i=0;i<courseList["course"].length;i++){
        const course = courseList["course"][i]
        const element =()=><CourseContainer>{course.title}{course.contentTypeId===32?<AccomodationIc/>:course.contentTypeId===39?<RestaurantIc/>:<EntertainmentIc/>}</CourseContainer>
        const csContainer = document.createElement("div");
        ReactDOM.render(element(),csContainer);
        div2.appendChild(csContainer);
    }
    div ?.appendChild(div2);
    return div;
}


    myFunction().then(courseList=>{
        createTag(courseList);
    })  
    
    
    
    
    
    // useEffect(()=>{
        
    // },[]);
    return(
     <div id = "myCourseInfolder"> 
        {/* {
            courseLists.map((item)=>(
                <>
                {console.log(item)}
                </>
            ))
        } */}
     </div>   
    )
}