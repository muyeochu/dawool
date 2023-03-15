import styled from "styled-components";
import { mainColor, blue } from "../../../styles/Colors";

export const MainFourthContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainFontStyle = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 62px;
  letter-spacing: 0.02em;

  margin-top: 130px;
`;

export const SideFontStyle = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.02em;

  margin-top: 40px;
  margin-bottom: 120px;
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CardOutFontStyle = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 37px;

  margin-bottom: 20px;
  letter-spacing: 0.02em;
`;

export const CardStyle = styled.div`
  transition: transform 0.2s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 309px;
  height: 128px;
  background: ${blue[100]};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 18px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardInFontStyle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
`;

export const ColorFont = styled.span`
  color: ${mainColor};
`;
