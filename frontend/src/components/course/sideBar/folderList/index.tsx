import { useState } from "react";
import { useRecoilState } from "recoil";
import { FolderState } from "../../../../recoil/CourseFolderState";
import {
  FolderContainer,
  InputFolderName,
  FolderGreyIc,
  CourseFolderYellowIc,
  FolderHeaderContainer,
} from "./styles";

import { CreateListType } from "../../../../types/courseFolderTypes";
import { customAxios2 } from "../../../../recoil/customAxios";

import ReactDOM from "react-dom";
import DetailBtn from "../../../common/DetailBtn";
import { useNavigate } from "react-router-dom";
import { userState } from "../../../../recoil/UserState";

export const Folders = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const getCourseFolderData = async () =>
    await customAxios2
      .get(`user/my-course`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.code === "EXPIRED_JWT_TOKEN") {
          window.localStorage.clear();
          setUser({
            accessToken: "",
            accessTokenExpiresIn: 0,
            grantType: "",
            nickName: "",
            refreshToken: "",
            isSurveyed: false,
          });
          alert("다시 로그인 해 주시기 바랍니다.");
          navigate("/");
          window.location.reload();
        }
      });

  const [folderState, setFolderState] = useRecoilState(FolderState);

  const [input, setInput] = useState("");

  async function myFunction() {
    let nowURL = new URL(window.location.href).href.includes("my");
    if (!nowURL) return;
    try {
      let folderList = await getCourseFolderData();
      return folderList;
    } catch (err) {
      throw err;
    }
  }

  function intoFolder(event: any, index: number) {
    const folderContainer = event.target.parentNode;

    const folderName = folderContainer.textContent.trim();
    const folderId = event.target.id.trim();

    setFolderState({
      isOpen: true,
      opendFolder: folderName,
      courseId: folderId,
    });
  }

  function createTag(folderList: any) {
    const div = document.getElementById("folder");
    const div2 = document.getElementById("FolderContainer");
    if (div2?.childNodes.length !== 0) return;
    for (let i = 0; i < folderList["myCourse"].length; i++) {
      const folder = folderList["myCourse"][i];
      const element = () => (
        <FolderContainer
          id={folder.courseId}
          onClick={(event) => intoFolder(event, i)}
        >
          <CourseFolderYellowIc />
          {folder.courseName}
        </FolderContainer>
      );
      const fdContainer = document.createElement("div");
      ReactDOM.render(element(), fdContainer);

      div2.appendChild(fdContainer);
    }
    div?.appendChild(div2);

    return div;
  }

  myFunction().then((folderList) => {
    createTag(folderList);
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

        return response.data;
      } catch (err: any) {
        console.log(err);
        if (err.response.data.code === "EXPIRED_JWT_TOKEN") {
          window.localStorage.clear();
          setUser({
            accessToken: "",
            accessTokenExpiresIn: 0,
            grantType: "",
            nickName: "",
            refreshToken: "",
            isSurveyed: false,
          });
          alert("다시 로그인 해 주시기 바랍니다.");
          navigate("/");
          window.location.reload();
        }
        throw new Error("error");
      }
    };
    myFunction().then((folderList) => {
      createTag(folderList);
    });
    let inputText = folderinput?.value;
    if (inputText) {
      postCourseFolderData(inputText).then(() => {
        window.location.reload();
      });
    }
    if (folderinput) {
      folderinput.value = "";
    }
  }

  return (
    <>
      <FolderHeaderContainer>
        <form onSubmit={insertFolder}>
          <label style={{ display: "flex" }}>
            <FolderGreyIc />

            <InputFolderName
              id="inputName"
              type="text"
              required={true}
              defaultValue={input}
            ></InputFolderName>
            <DetailBtn type={"add"} text={"추가"}></DetailBtn>
          </label>
        </form>
      </FolderHeaderContainer>

      <div id="folder">
        <div id="FolderContainer"></div>
      </div>
    </>
  );
};
