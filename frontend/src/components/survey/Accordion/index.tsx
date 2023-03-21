import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { accordionState } from "./state";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen)
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
