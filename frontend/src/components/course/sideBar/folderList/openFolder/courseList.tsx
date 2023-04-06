import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FolderState } from "../../../../../recoil/CourseFolderState";
import { useRecoilState } from "recoil";

import { ListType } from "../../../../../types/courseListTypes";
import { customAxios2 } from "../../../../../recoil/customAxios";

import ReactDOM from "react-dom";
import {
  AccomodationIc,
  CourseContainer,
  EntertainmentIc,
  RestaurantIc,
  XIc,
} from "./styles";
import useModal from "../../../../utils/useModal";
import { modalState } from "../../../../../recoil/ModalState";

declare global {
  interface Window {
    tar: string;
  }
}

export const CourseList = () => {
  const [folderState, setFolderState] = useRecoilState(FolderState);
  const { openModal, closeModal } = useModal();
  const [mdState, setModalState] = useRecoilState(modalState);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const getCourseFileData = (): Promise<ListType[]> =>
    customAxios2
      .get(`user/my-course/${folderState.courseId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  async function myFunction() {
    try {
      let courseList = await getCourseFileData();
      return courseList;
    } catch (err) {
      throw err;
    }
  }

  const contentId = function courseIdFun(event: any) {
    const tar = event.target.parentNode.id;
    window.tar = tar;

    return setFolderState;
  };

  async function deleteFunction() {
    try {
      await deleteCourseOneData();
    } catch (err) {
      throw err;
    }
  }

  const deleteCourseOneData = () => {
    customAxios2
      .delete(`user/my-course/${folderState.courseId}/${Number(window.tar)}`)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const modalDataS = {
    type: "default",
    title: "여행지 삭제",
    content: "정말 삭제하시겠습니까?",
    callback: () => {
      deleteFunction().then();
      alert("삭제되었습니다!");
      closeModal();
      exitFolder();
    },
  };
  function exitFolder() {
    setFolderState({
      isOpen: false,
      opendFolder: "",
      courseId: "",
    });
  }

  function setMapXY(e: any, courseList: any) {
    const mapX = e.target.parentNode.getAttribute("mapX");

    for (let i = 0; i < courseList["course"].length; i++) {
      if (courseList["course"][i].mapX === mapX) {
        let nowCourse = courseList["course"][i];
        if (nowCourse.contentTypeId === 39) {
          navigate(`/detail/restaurant/${courseList["course"][i].contentId}`);
        } else if (nowCourse.contentTypeId === 32) {
          navigate(
            `/detail/accommodation/${courseList["course"][i].contentId}`
          );
        } else if (nowCourse.contentTypeId === 12) {
          navigate(`/detail/tourspot/${courseList["course"][i].contentId}`);
        } else if (nowCourse.contentTypeId === 14) {
          navigate(`/detail/culture/${courseList["course"][i].contentId}`);
        } else if (nowCourse.contentTypeId === 28) {
          navigate(`/detail/leports/${courseList["course"][i].contentId}`);
        } else if (nowCourse.contentTypeId === 38) {
          navigate(`/detail/shopping/${courseList["course"][i].contentId}`);
        }
      }
    }
  }

  function createTag(courseList: any) {
    const div = document.getElementById("myCourseInfolder");
    const div2 = document.getElementById("CourseContainer");

    if (div2?.childNodes.length !== 0) return;
    for (let i = 0; i < courseList["course"].length; i++) {
      const course = courseList["course"][i];
      const idI = i.toString();
      const element = () => (
        <CourseContainer
          id={idI}
          onClick={(event) => setMapXY(event, courseList)}
        >
          {course.contentTypeId === 32 ? (
            <AccomodationIc />
          ) : course.contentTypeId === 39 ? (
            <RestaurantIc />
          ) : (
            <EntertainmentIc />
          )}
          {course.title}
          <XIc
            onClick={(event) => {
              contentId(event);
              if (window.tar !== "") {
                openModal(modalDataS);
              }
            }}
          />
        </CourseContainer>
      );
      const csContainer = document.createElement("div");
      csContainer.setAttribute("mapX", courseList["course"][i].mapX);
      csContainer.setAttribute("mapY", courseList["course"][i].mapY);
      ReactDOM.render(element(), csContainer);
      div2?.appendChild(csContainer);
    }
    if (div2) div?.appendChild(div2);
    return div;
  }

  myFunction().then((courseList) => {
    if (!mdState.isOpen) {
      createTag(courseList);
    }
  });

  return (
    <div id="myCourseInfolder">
      <div id="CourseContainer"></div>
    </div>
  );
};

export default CourseList;
