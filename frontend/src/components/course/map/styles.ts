import styled from "styled-components"
import {ReactComponent as Guideman} from "../../../assets/icon/guideManIc.svg"
import { mainColor } from "../../../styles/Colors"


export const GuideManStyle = styled(Guideman)`
    position: absolute;
    left: 60%;
    top:40%;
`
export const GuideText = styled.h2`
  position: absolute;
  color:${mainColor};
  text-align: center;
  left: 55%;
  top:30%;
`