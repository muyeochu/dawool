import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  AccordionItemContainer,
  HeaderContainer,
  HeaderText,
  HeaderCheckTextContainer,
  BodyContainer,
  UpdownIcStyle,
} from "./styles";

// icon
import { ReactComponent as CheckIc } from "../../../assets/icon/checkIc.svg";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
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
          <CheckIc />
          <HeaderText>{title}</HeaderText>
        </HeaderCheckTextContainer>

        <UpdownIcStyle isopen={isOpen.toString()}/>
      </HeaderContainer>

      {isOpen && <BodyContainer>{children}</BodyContainer>}
    </AccordionItemContainer>
  );
};

export default Accordion;
