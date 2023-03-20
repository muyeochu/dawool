import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { accordionState } from "./state";
import {
  AccordionItemContainer,
  HeaderContainer,
  HeaderText,
  HeaderCheckTextContainer,
  HeaderIcon,
  BodyContainer,
  UpdownIcStyle,
} from "./styles";

// icon
import { ReactComponent as CheckIc } from "../../../assets/icon/checkIc.svg";
import { ReactComponent as UpdownIc } from "../../../assets/icon/updownIc.svg";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItemContainer isOpen={isOpen}>
      <HeaderContainer isOpen={isOpen}>
        <HeaderCheckTextContainer>
          <CheckIc />
          <HeaderText onClick={toggleAccordion}>{title}</HeaderText>
        </HeaderCheckTextContainer>

        <UpdownIcStyle isOpen={isOpen}/>
      </HeaderContainer>

      <BodyContainer>{children}</BodyContainer>
    </AccordionItemContainer>
  );
};

export default Accordion;
