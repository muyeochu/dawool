import {atom} from "recoil";

interface FolderType{
    isOpen : boolean;
}

export const FolderState = atom<FolderType>({
    key:"folderState",
    default:{
        isOpen:false
    }
})