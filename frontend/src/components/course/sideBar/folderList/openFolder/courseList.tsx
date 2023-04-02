import {useEffect} from "react";

import { FolderState } from "../../../../../recoil/CourseFolderState";
import { useRecoilState,selector, useRecoilValue } from "recoil";
import { getCourseListData } from "../../../../../recoil/CourseListSelectors";
import { ListType } from "../../../../../types/courseListTypes";
import { customAxios2 } from "../../../../../recoil/customAxios";
import { createTaggedTemplate } from "typescript";
// import { FolderContainer } from "../styles";
import ReactDOM from 'react-dom';
import { AccomodationIc, CircleIc, CourseContainer, EntertainmentIc, RestaurantIc, TextInIc, XIc } from "./styles";
import useModal from "../../../../utils/useModal";

declare global {
    interface Window {
      tar: number;
    }
  }
export const CourseList = ()=>{
    const [folderState,setFolderState] = useRecoilState(FolderState);
    const { openModal, closeModal } = useModal();
    
    useEffect(() => {},[])

        const getCourseFileData = ():Promise<ListType[]>=>
        customAxios2.get(`user/my-course/${folderState.courseId}`)
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



        const contentId = function courseIdFun(event:any){
            const tar = event.target.parentNode.id;
            window.tar = tar;
            return setFolderState;
        }
        

        async function deleteFunction(){
            try{
                await deleteCourseOneData();
            }catch(err){
                throw err;
            }
        }

        const deleteCourseOneData = ()=>{

        customAxios2.delete(`user/my-course/${folderState.courseId}/${window.tar}`)
        .then(()=>{
            
            console.log("여행지 하나 삭제됨");
        }).catch((err)=>{
            console.log(err);
        })}
        
        const modalDataS = {
            type:"default",
            title:"여행지 삭제",
            content:"정말 삭제하시겠습니까?",
            callback:()=>{
                deleteFunction().then()
                alert("삭제되었습니다!");
                closeModal();
                exitFolder();

                //새로고침 후 다시 보이기
            }
        }
        function exitFolder(){
            setFolderState({
                isOpen:false,
                opendFolder:"",
                courseId:"",
            });
        }
    
    
    function createTag(courseList:any){
    const div = document.getElementById("myCourseInfolder");
    const div2 = document.createElement("div");
    div2.className = "CourseContainer"
    console.log(courseList)
    for(let i=0;i<courseList["course"].length;i++){
        const course = courseList["course"][i]
        const idI = i.toString();
        const element =()=><CourseContainer id={idI}><CircleIc></CircleIc>{course.title}{course.contentTypeId===32?<AccomodationIc/>:course.contentTypeId===39?<RestaurantIc/>:<EntertainmentIc/>}<XIc onClick={(event)=>{contentId(event);openModal(modalDataS);}}/></CourseContainer>
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