import {ReactComponent as FolderGrey} from "../../../../assets/icon/folderGrey.svg";
import {ReactComponent as FolderYellow} from "../../../../assets/icon/folderYellow.svg";
import styled from "styled-components";
import { MenuFont } from "../../../personal/styles";
import { grey, black } from "../../../../styles/Colors";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {FolderState} from "../../../../recoil/CourseFolderState"
const FolderYellowIc = styled(FolderYellow)`
    margin-left: 5%;
    margin-right: 5%;
    display: inline-block;
`

const FolderHeaderContainer = styled.div`
border-bottom: 1px solid ${grey[300]}; 
flex-direction: row;
align-items: center;
padding:0px 0px 10px 10px;
`
const FolderGreyIc = styled(FolderGrey)`
    margin-left: 5%;
    
`
// const FolderHeaderFont = styled(MenuFont)`
//     margin-left: 3%;
//     color:${grey[300]}
// `

const InputForderName = styled.input.attrs({
    placeholder:"새 코스명을 입력해주세요.",
    
})`
    display:inline-block;
    margin-left:3%;
    border:none;
`
const FolderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;
    color: ${grey[300]};

    border-bottom:1px solid ${grey[300]};
    cursor: pointer; //생성된 폴더 목록 클릭 가능하게 표시.(마우스 커서 변환)
    &:hover{
        color:${black}
    }
`

// const FolderItem = ({name:string})=>{<FolderYellowIc>{name}<FolderYellowIc/>}
//서버한테서 이미 생성 된 폴더들 받아오기



//폴더 생성 실험용 데이터
const data=[
    {id:1, name:"111"},
    {id:2, name:"222"},{
      id:3,  name:"dfsfsdlfkjalsdjfajeoijflkdoeijfjddddddd"
    }
]


export const Folders=()=>{
    const baseURL = "http://j8d105.p.ssafy.io:8888";
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
        console.log(input)
    }
    function test(e:any){
        e.preventDefault(); 
        data.push(...[{id:data.length+1, name:input}])
        console.log(data)
    }

    function intoFolder(){
        setFolderState({
            isOpen:true
        });
    }
    return(
        <>
        <FolderHeaderContainer>
            <form onSubmit={test}>
            {/* 백엔드와 통신 시 아래 코드 사용 */}
            {/* onSubmit={insertFolder} */} 
                <label>
            <FolderGreyIc/>
            {/* <input placeholder="새 코스명을 입력해주세요." ></input> */}
            {/* <FolderHeaderFont>새 코스명을 입력해주세요.</FolderHeaderFont> */}
            {/* 엔터 누를 때마다 백한테 보내기. 해당 코드는 https://www.youtube.com/watch?v=gZddSM-byRE&list=PLkaAEQyMpRg-k-PZDKvqw7EChwJQXxhkI&index=3 참고하기 */}
            <InputForderName type="text" required={true} value={input} onChange={changeFolder} ></InputForderName>
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
                <div><FolderYellowIc/>{da.name}</div>
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