import styled from "styled-components";
import { mainColor, blue, grey } from "../../../styles/Colors";
import { ReactComponent as CloseIc } from "../../../assets/icon/closeIc.svg";
import { ReactComponent as VolumeIc } from "../../../assets/icon/volumeIc.svg";

// 모달 화면을 어둡게 함
export const ModalDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// 작은 모달
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 150px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 9999;

  &.barrier {
    min-height: 150px;
    height: auto;
    justify-content: space-between;
  }
`;

export const ModalTitle = styled.div`
  padding: 1.4rem 1.4rem 1.4rem 1.4rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: inline-flex;
  align-items: center;
`;

export const ModalCourseTitle = styled.div`
  padding: 0.8rem 1.4rem 4.2rem 1.4rem;
  font-weight: 700;
  font-size: 25px;
  line-height: 20px;
`;

export const ModalCourseContainer = styled.div`
  width: 380px;
  height: 280px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${grey[100]};
    border-radius: 14px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${grey[300]};
    border-radius: 14px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${grey[200]};
  }
`;

export const ModalContents = styled.div`
  padding-left: 1.4rem;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: ${grey[500]};

  &.barrier {
    padding-right: 1.4rem;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;

  padding-right: 1.4rem;

  &.barrier {
    padding-bottom: 20px;
  }
`;

export const ModalBtn = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  margin-top: 20px;
  :hover {
    opacity: 50%;
    transition: 0.5s;
    cursor: pointer;
  }
`;

export const ModalYesBtn = styled(ModalBtn)`
  color: ${mainColor};
`;

// 큰모달
export const ModalLargeContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 520px;

  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  z-index: 9999;

  &.course {
    width: 470px;
    height: 530px;
  }
`;

export const CloseBtnStyle = styled(CloseIc)`
  position: absolute;
  width: 18px;
  height: 18px;

  top: 3%;
  right: 2%;

  &:hover {
    cursor: pointer;
  }

  &.mic {
    width: 16px;
    height: 16px;

    top: 2%;
    right: 2.5%;
  }
`;

export const ModalLargeContents = styled.div`
  width: 300px;
  height: 250px;
  margin-top: -20px;
  margin-bottom: 25px;
`;

export const MainFontStyle = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 10px;
`;

export const BtnStyle = styled.button`
  transition: transform 0.2s ease-in-out;

  width: 240px;
  height: 46px;
  background-color: ${mainColor};
  color: white;
  border: none;
  border-radius: 18px;
  margin-top: 50px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: ${blue[500]};
  }
`;

export const BtnFontStyle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
`;

export const SideFontStyle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  text-decoration: underline;
  color: ${grey[500]};

  &:hover {
    cursor: pointer;
  }
`;

export const ModalMicContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 570px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: 20px;

  z-index: 9999;
`;

export const VolumeIcStyle = styled(VolumeIc)`
  fill: ${mainColor};
  min-width: 18px;
  max-width: 18px;
  min-height: 18px;
  max-height: 18px;
  margin-left: 5px;

  &:hover {
    fill: ${blue[500]};
    cursor: pointer;
  }
`;
