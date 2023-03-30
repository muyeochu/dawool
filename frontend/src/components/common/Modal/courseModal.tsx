import { useNavigate } from "react-router-dom";
import { getCourseFolderData } from "../../course/sideBar/folderList";
import ReactDOM from 'react-dom';
import { customAxios2 } from "../../../recoil/customAxios";
import useModal from "../../utils/useModal";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getDataSelector } from "../../../recoil/DetailSelectors";
import {
  ModalDimmer,
  ModalLargeContainer,
  CloseBtnStyle,
  BtnStyle,
  BtnFontStyle,
  ModalCourseTitle,
  ModalCourseContainer
} from "./styles";
import { grey } from "../../../styles/Colors";

import { FolderContainer,FolderYellowIc  } from "../../course/sideBar/folderList/styles";
import { insertCourseType } from "../../../types/courseListTypes";

declare global{
  interface Window{
    targetCourse:string;
    contentId:number;
    contentTypeId:number;
    title:string;
    mapX:number;
    mapY:number;
  }
}
const CourseModal = () => {
  const navigate = useNavigate();
  const { modalDataState, closeModal } = useModal();



  getCourseFolderData();
  async function myFunction() {
    try {
        let folderList = await getCourseFolderData();
        return folderList;
    } catch (err) {
        throw err;
    } 
}

function setCourseIdIntoTar(e:any){
  window.targetCourse = e.target.id.trim(); 
  const goToParent =e.target.parentNode.parentNode.parentNode;
  const goToGrandParent = goToParent.parentNode.parentNode.parentNode.parentNode;
  const goToChild = goToGrandParent.childNodes[1].childNodes[0].childNodes[0];
  const goToGrandChild = goToChild.childNodes[0].childNodes[1].childNodes[0];
  window.contentId= goToGrandChild.getAttribute("contentId");
  window.contentTypeId= goToGrandChild.getAttribute("contentTypeId");
  window.title= goToGrandChild.getAttribute("title");
  window.mapX= goToGrandChild.getAttribute("mapX");
  window.mapY= goToGrandChild.getAttribute("mapY");
  console.log(window.targetCourse)
  const parent = e.target.parentNode.parentNode;

  for (var i = 0; i < parent.childNodes.length; i++) {
    parent.childNodes[i].style.backgroundColor='white';
  }
  e.target.parentNode.style.backgroundColor=`${grey[100]}`;

      
}

function createTag(folderList: any) {
  const div = document.getElementById("modalFolder");
  const div2 = document.createElement("div"); 
  div2.className="FolderContainer";
  console.log(div2);
  for(let i=0;i<folderList["myCourse"].length;i++){
      const folder = folderList["myCourse"][i];
      const element = ()=><FolderContainer id = {folder.courseId} onClick={(event)=>setCourseIdIntoTar(event)}><FolderYellowIc/>{folder.courseName}</FolderContainer>
      const fdContainer = document.createElement("div");
      ReactDOM.render(element(),fdContainer);
      div2.appendChild(fdContainer); 
  }
  div ?.appendChild(div2);
  console.log(div)
  return div;
}

myFunction().then(folderList=>{
  createTag(folderList);
})


function insertCourse(e:any){
  e.preventDefault();
  const postCourseFolderData = async():Promise<insertCourseType>=>{
      try{
          const response = await customAxios2.post<insertCourseType>(`user/my-course/${window.targetCourse}`,{
            contentId: window.contentId,
            contentTypeId: window.contentTypeId,
            title: window.title,
            mapX: window.mapX,
            mapY: window.mapY
          

          });
          console.log(response);
          return response.data;
      }catch(err){
          console.log(err);
          throw new Error('error');
      }
  }
  myFunction().then(folderList=>{
      createTag(folderList);
  })
      postCourseFolderData().then(()=>{   
          window.location.reload();
      });
}


  return (
    <>
      {modalDataState.isOpen && modalDataState.type === "course" && (
        <ModalDimmer>
          <ModalLargeContainer>
          <ModalCourseTitle>저장할 코스를 선택해주세요.</ModalCourseTitle><ModalCourseContainer>
          <div id="modalFolder">

          </div>
          </ModalCourseContainer>
            <CloseBtnStyle onClick={closeModal} />
            <BtnStyle>
              <BtnFontStyle
                onClick={insertCourse}
              >
                추가하기
              </BtnFontStyle>
            </BtnStyle>
          </ModalLargeContainer>
        </ModalDimmer>
      )}
    </>
  );
};

export default CourseModal;