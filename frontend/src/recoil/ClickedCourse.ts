import {atom} from "recoil";

interface ClickedType{
    isClicked:boolean;
    mapX:string;
    mapY:string;
}

export const clickedState = atom<ClickedType>({
    key:"clickedState",
    default:{
        isClicked:false,
        mapX:"",
        mapY:""
    }
})