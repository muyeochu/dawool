import styled from "styled-components";
import { mainColor, grey } from "../../../styles/Colors";

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
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 150px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const ModalTitle = styled.div`
  // 상우하좌
  padding: 1.4rem 1.4rem 1.2rem 1.4rem;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

export const ModalContents = styled.div`
  padding-left: 1.4rem;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${grey[500]};
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 32px;
  margin-top: 20px;
  padding-right: 1.4rem;
`;

export const ModalButton = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  :hover {
    opacity: 50%;
    transition: 0.5s;
    cursor: pointer;
  }
`;

export const ModalYesButton = styled(ModalButton)`
  color: ${mainColor};
`;
