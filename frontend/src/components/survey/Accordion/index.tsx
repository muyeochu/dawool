import React, { useState } from "react";
import {
  AccordionItemContainer,
  HeaderContainer,
  HeaderText,
  HeaderCheckTextContainer,
  BodyContainer,
  UpdownIcStyle,
} from "./styles";
import { useRecoilValue } from "recoil";
import {
  firstState,
  secondState,
  thirdState,
  fourthState,
  fifthState,
} from "../../../recoil/SurveyState";

// icon
import { ReactComponent as CheckIc } from "../../../assets/icon/checkIc.svg";
import { ReactComponent as CheckedIc } from "../../../assets/icon/checkedIc.svg";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, id }) => {
  const first = useRecoilValue(firstState);
  const second = useRecoilValue(secondState);
  const third = useRecoilValue(thirdState);
  const fourth = useRecoilValue(fourthState);
  const fifth = useRecoilValue(fifthState);

  const stateValue =
    id === "firstAccordion"
      ? first
      : id === "secondAccordion"
      ? second
      : id === "thirdAccordion"
      ? third
      : id === "fourthAccordion"
      ? fourth
      : fifth;

  // Accordion이 열려있는지, 닫혀있는지 여부
  const [isOpen, setIsOpen] = useState(false);
  //  Accordion의 Header를 클릭 -> isOpen 값 반전
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItemContainer isopen={isOpen.toString()}>
      <HeaderContainer onClick={toggleAccordion} isopen={isOpen.toString()}>
        <HeaderCheckTextContainer>
          {stateValue !== "" && stateValue.length !== 0 ? (
            <CheckedIc />
          ) : (
            <CheckIc />
          )}

          <HeaderText>{title}</HeaderText>
        </HeaderCheckTextContainer>

        <UpdownIcStyle isopen={isOpen.toString()} />
      </HeaderContainer>

      {isOpen && <BodyContainer>{children}</BodyContainer>}
    </AccordionItemContainer>
  );
};

export default Accordion;
