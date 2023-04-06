import { useNavigate } from "react-router-dom";
// import { getCourseFolderData } from "../../course/sideBar/folderList";
import ReactDOM from "react-dom";
import { customAxios2 } from "../../../recoil/customAxios";
import useModal from "../../utils/useModal";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import {
  ModalDimmer,
  ModalLargeContainer,
  CloseBtnStyle,
  BtnStyle,
  BtnFontStyle,
  ModalCourseTitle,
  ModalCourseContainer,
} from "./styles";
import DetailBtn from "../DetailBtn";
import {
  FolderHeaderContainerModal,
  ModalFolderGreyIc,
  InputFolderNameModal,
} from "../../course/sideBar/folderList/styles";
import { useRecoilState } from "recoil";
import { userState } from "../../../recoil/UserState";
import { useState } from "react";
import { grey, mainColor, blue } from "../../../styles/Colors";
import { CreateListType } from "../../../types/courseFolderTypes";
import {
  FolderContainer,
  ModalFolderYellowIc,
} from "../../course/sideBar/folderList/styles";
import { insertCourseType } from "../../../types/courseListTypes";
import { ListType } from "../../../types/courseFolderTypes";
declare global {
  interface Window {
    targetCourse: string;
    contentId: number;
    contentTypeId: number;
    title: string;
    mapX: number;
    mapY: number;
  }
}
const CourseModal = () => {
  const navigate = useNavigate();
  const { modalDataState, closeModal } = useModal();
  const [input, setInput] = useState("");
  const [user, setUser] = useRecoilState(userState);

  const getCourseFolderData = (): Promise<ListType[]> =>
    customAxios2
      .get(`user/my-course`)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });

  async function myFunction() {
    let nowURL = new URL(window.location.href).href.includes("detail");
    if (!nowURL || user.accessToken === "") return;
    try {
      let folderList = await getCourseFolderData();
      return folderList;
    } catch (err) {
      throw err;
    }
  }

  function setCourseIdIntoTar(e: any) {
    window.targetCourse = e.target.id.trim();
    const goToParent = e.target.parentNode.parentNode.parentNode;
    const goToGrandParent =
      goToParent.parentNode.parentNode.parentNode.parentNode;
    const goToChild = goToGrandParent.childNodes[1].childNodes[0].childNodes[0];
    const goToGrandChild = goToChild.childNodes[0].childNodes[1].childNodes[0];
    window.contentId = goToGrandChild.getAttribute("contentId");
    window.contentTypeId = goToGrandChild.getAttribute("contentTypeId");
    window.title = goToGrandChild.getAttribute("title");
    window.mapX = goToGrandChild.getAttribute("mapX");
    window.mapY = goToGrandChild.getAttribute("mapY");
    console.log(window.targetCourse);
    const parent = e.target.parentNode.parentNode;

    for (var i = 0; i < parent.childNodes.length; i++) {
      parent.childNodes[i].style.backgroundColor = "white";
    }
    e.target.parentNode.style.backgroundColor = `${blue[100]}`;
  }

  function createTag(folderList: any) {
    const div = document.getElementById("modalFolder");
    const div2 = document.getElementById("modalFolderContainer");
    // const div2 = document.createElement("div");
    // div2.className = "FolderContainer";
    if (div2?.childNodes.length !== 0) return;
    console.log(div2);
    for (let i = 0; i < folderList["myCourse"].length; i++) {
      const folder = folderList["myCourse"][i];
      const element = () => (
        <FolderContainer
          id={folder.courseId}
          onClick={(event) => setCourseIdIntoTar(event)}
        >
          <ModalFolderYellowIc />
          {folder.courseName}
        </FolderContainer>
      );
      const fdContainer = document.createElement("div");
      ReactDOM.render(element(), fdContainer);
      div2.appendChild(fdContainer);
    }
    div?.appendChild(div2);
    console.log(div);
    return div;
  }

  myFunction().then((folderList) => {
    let nowURL = new URL(window.location.href).href.includes("detail");
    if (nowURL) createTag(folderList);
  });

  function insertFolder(e: any) {
    e.preventDefault();
    let folderinput = document.getElementById(
      "inputName"
    ) as HTMLInputElement | null;
    const postCourseFolderData = async (
      name: string
    ): Promise<CreateListType> => {
      try {
        const response = await customAxios2.post<CreateListType>(
          `user/my-course`,
          { courseName: name }
        );
        console.log(response);
        return response.data;
      } catch (err) {
        console.log(err);
        throw new Error("error");
      }
    };
    myFunction().then((folderList) => {
      createTag(folderList);
    });
    let inputText = folderinput?.value;
    if (inputText) {
      postCourseFolderData(inputText).then(() => {
        alert("코스가 추가되었습니다.");
        window.location.reload();
      });
    }
    if (folderinput) {
      folderinput.value = "";
    }
    // customAxios2.post(`user/my-course`,{name})
    // .then((res)=>{
    //     console.log(res);
    // }).catch((err)=>{
    //     console.log(err);
    // })
    // const insertFolder = async()=>{
    //     await axios
    //     .post(baseURL+"/api/course",{
    //         folderName:input
    //     })
    //     .then((res)=>{
    //         console.log(res.data);
    //         setInput(e.target.value);
    //         // myFunction();
    //         // getFolders();
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }
    // insertFolder();
  }
  function insertCourse(e: any) {
    e.preventDefault();
    let nowURL = new URL(window.location.href).href.includes("detail");
    if (!nowURL || user.accessToken === "") return;
    const postCourseFolderData = async (): Promise<insertCourseType> => {
      try {
        const response = await customAxios2.post<insertCourseType>(
          `user/my-course/${window.targetCourse}`,
          {
            contentId: window.contentId,
            contentTypeId: window.contentTypeId,
            title: window.title,
            mapX: window.mapX,
            mapY: window.mapY,
          }
        );
        console.log(response);
        return response.data;
      } catch (err) {
        console.log(err);
        throw new Error("error");
      }
    };

    myFunction().then((folderList) => {
      let nowURL = new URL(window.location.href).href.includes("detail");
      if (!nowURL || user.accessToken === "") return;
      createTag(folderList);
    });
    postCourseFolderData().then(() => {
      alert("여행지가 추가되었습니다.");
      window.location.reload();
    });
  }

  return (
    <>
      {modalDataState.isOpen && modalDataState.type === "course" && (
        <ModalDimmer>
          <ModalLargeContainer className="course">
            <ModalCourseTitle>저장할 코스를 선택해주세요.</ModalCourseTitle>
            <FolderHeaderContainerModal>
              <form onSubmit={insertFolder}>
                {/* 백엔드와 통신 시 아래 코드 사용 */}
                {/* onSubmit={insertFolder} */}
                <label style={{ display: "flex", alignItems: "center" }}>
                  <ModalFolderGreyIc />
                  {/* <input placeholder="새 코스명을 입력해주세요." ></input> */}
                  {/* <FolderHeaderFont>새 코스명을 입력해주세요.</FolderHeaderFont> */}
                  {/* 엔터 누를 때마다 백한테 보내기. 해당 코드는 https://www.youtube.com/watch?v=gZddSM-byRE&list=PLkaAEQyMpRg-k-PZDKvqw7EChwJQXxhkI&index=3 참고하기 */}
                  <InputFolderNameModal
                    id="inputName"
                    type="text"
                    required={true}
                    defaultValue={input}
                  ></InputFolderNameModal>
                  <DetailBtn type={"add"} text={"추가"}></DetailBtn>

                  {/* <button>추가</button> */}
                  {/* onChange={changeFolder} */}
                </label>
              </form>
            </FolderHeaderContainerModal>

            <ModalCourseContainer>
              <div id="modalFolder">
                <div id="modalFolderContainer"></div>
              </div>
            </ModalCourseContainer>
            <CloseBtnStyle onClick={closeModal} />
            <BtnStyle>
              <BtnFontStyle onClick={insertCourse}>추가하기</BtnFontStyle>
            </BtnStyle>
          </ModalLargeContainer>
        </ModalDimmer>
      )}
    </>
  );
};

export default CourseModal;
