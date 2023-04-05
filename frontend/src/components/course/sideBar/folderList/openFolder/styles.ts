import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../../../assets/icon/arrowIc.svg";
// import {ReactComponent as Dot} from "../../../../../assets/icon/menuDotIc.svg"
import { ReactComponent as DeleteFolder } from "../../../../../assets/icon/deleteIc.svg";
import { ReactComponent as UpdateMemo } from "../../../../../assets/icon/updateIc.svg";
import { ReactComponent as Accomodation } from "../../../../../assets/icon/accomodationIc.svg";
import { ReactComponent as Entertainment } from "../../../../../assets/icon/entertainmentIc.svg";
import { ReactComponent as Restaurant } from "../../../../../assets/icon/restaurantIc.svg";
import { ReactComponent as X } from "../../../../../assets/icon/xIc.svg";
import { ReactComponent as Circle } from "../../../../../assets/icon/circleIc.svg";
import { grey } from "../../../../../styles/Colors";
import { ReactComponent as Memo } from "../../../../../assets/icon/memoIc.svg";
import CourseList from "./courseList";

export const ExitFolderContainer = styled.div`
  flex-direction: row;
  align-items: center;
  margin: 5px;
  text-align: center;
`;
export const ExitFolderButton = styled.button`
  box-sizing: border-box;
  /* Auto layout */
  display: inline-block;
  flex-direction: row;
  align-items: center;
  padding: 14px 34px;
  gap: 10px;
  /* position: absolute; */
  border: 1px solid #959595;
  border-radius: 20px;
  background-color: white;
`;
export const ArrowIc = styled(Arrow)`
  display: inline-block;
  flex-direction: row;
  align-items: center;
  padding: 5px 0px 0px 0px;
`;
// export const DotIc = styled(Dot)`
//     margin-left: 60%;
//     cursor: pointer;
// `
export const FolderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid ${grey[300]};
  justify-content: space-between;
`;
export const FolderNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 80%;
`;
export const DeleteIc = styled(DeleteFolder)`
  position: absolute;
  text-align: center;
  overflow: hidden;
  margin-left: 20%;
  cursor: pointer;
`;

// export const DotContainer = styled.div`
//     z-index: 100;
//     position: absolute;
//   text-align: center;
//   overflow: hidden;
//   margin-left:20%;
// `
// export const DotContent = styled(DropDownContent)`
//     border: 1px solid ${grey[300]};
// `

export const MemoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const UpdateIc = styled(UpdateMemo)`
  position: absolute;
  text-align: center;
  overflow: hidden;
  margin-left: 20%;
  cursor: pointer;
`;

export const AccomodationIc = styled(Accomodation)`
  margin: 0% 5%;
  display: inline-block;
`;
export const EntertainmentIc = styled(Entertainment)`
  margin: 0% 5%;
  display: inline-block;
`;
export const RestaurantIc = styled(Restaurant)`
  margin: 0% 5%;
  display: inline-block;
`;
export const CircleIc = styled(Circle)`
  margin-left: 5%;
  margin-right: 5%;
  display: inline-block;
`;
export const TextInIc = styled.text`
  margin-left: 5%;
  margin-right: 5%;
  display: inline-block;
`;
export const XIc = styled(X)`
  position: absolute;
  text-align: center;
  overflow: hidden;
  margin-left: 23.23%;
  cursor: pointer;
`;
export const CourseListContainer = styled(CourseList)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid ${grey[300]};
  cursor: pointer;
`;
