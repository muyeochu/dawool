import {atom} from "recoil";

interface FolderType{
    isOpen : boolean;
    opendFolder:string;
    courseId:Number;
}

export const FolderState = atom<FolderType>({
    key:"folderState",
    default:{
        isOpen:false,
        opendFolder:"",
        courseId:1
    }
})

