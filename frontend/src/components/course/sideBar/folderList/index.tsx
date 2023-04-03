import { MenuFont } from "../../../personal/styles";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, selector } from "recoil";
import { FolderState } from "../../../../recoil/CourseFolderState";
import {
  FolderContainer,
  InputFolderName,
  FolderGreyIc,
  FolderYellowIc,
  FolderHeaderContainer,
  FolderContainerWrapper,
} from "./styles";
import axios from "axios";
// import { FolderListSelector } from "../../../../recoil/CourseFolderState";
import { ListType, CreateListType } from "../../../../types/courseFolderTypes";
// const FolderItem = ({name:string})=>{<FolderYellowIc>{name}<FolderYellowIc/>}
//서버한테서 이미 생성 된 폴더들 받아오기
import { customAxios2 } from "../../../../recoil/customAxios";
import { Suspense } from "react";
import { AxiosInstance } from "axios";
import { userState } from "../../../../recoil/UserState";
import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
//폴더 생성 실험용 데이터
// const data=[
//     {id:1, name:"111"},
//     {id:2, name:"222"},{
//       id:3,  name:"폴더 명 적당히 긴거로 치기"
//     }
// ]

export const Folders = () => {
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
  const navigate = useNavigate();
  // const baseURL = "http://j8d105.p.ssafy.io:8888";
  const baseURL = process.env.BASE_URL;
  const [folderState, setFolderState] = useRecoilState(FolderState);
  const [user, setUser] = useRecoilState(userState);

  const [input, setInput] = useState("");

  useEffect(() => {
    //나중에 백이랑 연동되면 아래 코드 실행하기
    // getFolders();

    console.log("내코스 관리 페이지 useEffect실행됐다!");
  }, []);

  //     const UniqueFolderListSelector = selector<ListType[]>({
  //         key:"UniqueFolderListSelector",
  //         get:async ()=>{
  //             try{
  //                 const folderList = await getCourseFolderData();

  //                 return folderList;
  //             }catch(err){
  //                 throw err;
  //             }
  //         }
  //     })
  // let folderLists = console.log(useRecoilValue<ListType[]>(UniqueFolderListSelector));
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
    // console.log(event.target.id)
    const folderName = folderContainer.textContent.trim();
    const folderId = event.target.id.trim();
    // const folderId = folderContainer.Id.trim();
    // console.log(folderId)
    setFolderState({
      isOpen: true,
      opendFolder: folderName, //클릭한 태그의 innerText
      courseId: folderId,
      //     //Id는 백에서 받아와서 넣기??
      //     // openFolder: props 입력받아서 그 props의 폴더 이름 넣기
      //     //밑에서 치면 da.name이런식으로 넣기.
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
          <FolderYellowIc />
          {folder.courseName}
        </FolderContainer>
      );
      const fdContainer = document.createElement("div");
      ReactDOM.render(element(), fdContainer);
      // fdContainer.setAttribute("courseId",folder.courseId)
      div2.appendChild(fdContainer);
    }
    div?.appendChild(div2);
    console.log(div);
    return div;
  }

  myFunction().then((folderList) => {
    createTag(folderList);
  });

  // console.log(UniqueFolderListSelector.key);
  // const handleInput=(e:any)=>{
  //     if(e.code==='Enter'){
  //         setNewFolder(e.target.value);
  //         console.log(e.target.value);
  //         setInput(e.target.value);
  //     }
  // } 엔터 인식하는 함수. 쓸지 안쓸지 아직 고민

  // const getCourseFolderData = ():Promise<ListType[]>=>
  // customAxios2.get(`user/my-course`)
  // .then((res)=>{
  // console.log(res);
  // return res.data;
  // }).catch((err)=>{
  //     console.log(err);
  // })
  //백이랑 통신해서 만든 폴더 백에 보내기 위한 코드
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
  // function changeFolder(e:any){
  //     e.preventDefault();
  //     // setInput(e.target.value);
  //     // data.push(input);
  // }
  function test(e: any) {
    e.preventDefault();
    // data.push(...[{id:data.length+1, name:input}])
    // console.log(data)
    // let folderinput = document.getElementById("inputName") as HTMLInputElement|null;
    // if(folderinput){
    //     folderinput.value="";
    // }
    let folderinput = document.getElementById(
      "inputName"
    ) as HTMLInputElement | null;
    if (folderinput) {
      folderinput.value = "";
    }
    console.log(e.target.value);
    setInput(e.target.value); //이거하면 화면에 폴더리스트 갱신됨 히히
  }

  return (
    <>
      <FolderHeaderContainer>
        <form onSubmit={insertFolder}>
          {/* 백엔드와 통신 시 아래 코드 사용 */}
          {/* onSubmit={insertFolder} */}
          <label>
            <FolderGreyIc />
            {/* <input placeholder="새 코스명을 입력해주세요." ></input> */}
            {/* <FolderHeaderFont>새 코스명을 입력해주세요.</FolderHeaderFont> */}
            {/* 엔터 누를 때마다 백한테 보내기. 해당 코드는 https://www.youtube.com/watch?v=gZddSM-byRE&list=PLkaAEQyMpRg-k-PZDKvqw7EChwJQXxhkI&index=3 참고하기 */}
            <InputFolderName
              id="inputName"
              type="text"
              required={true}
              defaultValue={input}
            ></InputFolderName>
            {/* onChange={changeFolder} */}
          </label>
        </form>
      </FolderHeaderContainer>

      {/* 백이랑 통신 후 아래 주석 코드 사용해서 폴더 출력하기 
selector 로 리스트 받아오기*/}
      <div id="folder">
        <div id="FolderContainer"></div>
      </div>
      {/* {data.map((da)=>{
        return(
            <FolderContainer onClick={intoFolder}><FolderYellowIc/>{" "+da.name }</FolderContainer>
        )
    })} */}
    </>
  );
};
