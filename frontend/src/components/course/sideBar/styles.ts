import styled from "styled-components"
import { white,black } from "../../../styles/Colors";
import { SideHeader } from "../styles";
import { Folders } from "./folderList";

export const SideInHeader = styled(SideHeader)`
  background-color:${white};
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SideInHeaderText = styled.h4`
  color:${black};
  margin-left: 5%;
`

export const FolderContainer = styled(Folders)`
  overflow-y: auto;
`