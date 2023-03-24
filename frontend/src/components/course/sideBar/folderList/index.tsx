import { MenuFont } from "../../../personal/styles";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {FolderState} from "../../../../recoil/CourseFolderState"
import {FolderContainer,InputForderName,FolderGreyIc,FolderYellowIc,FolderHeaderContainer} from "./styles"

// const FolderItem = ({name:string})=>{<FolderYellowIc>{name}<FolderYellowIc/>}
//서버한테서 이미 생성 된 폴더들 받아오기



//폴더 생성 실험용 데이터
const data=[
    {id:1, name:"111"},
    {id:2, name:"222"},{
      id:3,  name:"폴더 명 적당히 긴거로 치기"
    }
]


export const Folders=()=>{
    // const baseURL = "http://j8d105.p.ssafy.io:8888";
    const baseURL = process.env.BASE_URL;
    const [folderState, setFolderState] = useRecoilState(FolderState);
    const [input, setInput] = useState("");
    // const [newFolder, setNewFolder] = useState<string>("");

    useEffect(()=>{
        //나중에 백이랑 연동되면 아래 코드 실행하기
        // getFolders();
        console.log("내코스 관리 페이지 useEffect실행됐다!");
    },[]);

    //백엔드로부터 기존 폴더 받아오는 코드
    // async function getFolders(){
    //     await axios
    //     .get(baseURL+"/api/user/my-course")
    //     .then((res)=>{
    //         console.log(res.data);
    //         setFolders(res.data);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }

    // const handleInput=(e:any)=>{
    //     if(e.code==='Enter'){
    //         setNewFolder(e.target.value);
    //         console.log(e.target.value);
    //         setInput(e.target.value);
    //     }
    // } 엔터 인식하는 함수. 쓸지 안쓸지 아직 고민

    //백이랑 통신해서 만든 폴더 백에 보내기 위한 코드
    // function insertFolder(e:any){
    //     e.preventDefault();
    //     const insertFolder = async()=>{
    //         await axios
    //         .post(baseURL+"/api/user/my-course",{
    //             folderName:input
    //         })
    //         .then((res)=>{
    //             console.log(res.data);
    //             setInput("");
    //             getFolders();
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //         })
    //     }
    // insertFolder();
    // }
    function changeFolder(e:any){
        e.preventDefault(); 
        setInput(e.target.value);
        // data.push(input);
    }
    function test(e:any){
        e.preventDefault(); 
        data.push(...[{id:data.length+1, name:input}])
        console.log(data)
        let forderinput = document.getElementById("inputName") as HTMLInputElement|null;
        if(forderinput){
            forderinput.value="";
        }
        setInput(e.target.value); //이거하면 화면에 폴더리스트 갱신됨 히히
    }

    function intoFolder(){
        setFolderState({
            isOpen:true,
            opendFolder:"임시",
            courseId:data[0].id
            //Id는 백에서 받아와서 넣기??
            // openFolder: props 입력받아서 그 props의 폴더 이름 넣기
            //밑에서 치면 da.name이런식으로 넣기.
        });
    }
    return(
        <>
        <FolderHeaderContainer>
            <form onSubmit={test} >
            {/* 백엔드와 통신 시 아래 코드 사용 */}
            {/* onSubmit={insertFolder} */} 
                <label>
            <FolderGreyIc/>
            {/* <input placeholder="새 코스명을 입력해주세요." ></input> */}
            {/* <FolderHeaderFont>새 코스명을 입력해주세요.</FolderHeaderFont> */}
            {/* 엔터 누를 때마다 백한테 보내기. 해당 코드는 https://www.youtube.com/watch?v=gZddSM-byRE&list=PLkaAEQyMpRg-k-PZDKvqw7EChwJQXxhkI&index=3 참고하기 */}
            <InputForderName id="inputName" type="text" required={true} value={input} onChange={changeFolder} ></InputForderName>
            </label>
            </form>
        </FolderHeaderContainer>

{/* 백이랑 통신 후 아래 주석 코드 사용해서 폴더 출력하기 */}
        {/* {folders?
            folders.map((folder)=>{
                return(
                    <div></div>
                    // <div ><FolderYellowIc/>{folder.folderName}</div>
                )
            })
        :
        (data.map((da)=>{
            return(
                <div><FolderYellowIc />{da.name}</div>
            )
        })
        )
        } */}
        
    {data.map((da)=>{
        return(
            <FolderContainer onClick={intoFolder}><FolderYellowIc/>{" "+da.name }</FolderContainer>
        )
    })}
        </>
    );
}