import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { accordionState } from './state';
import { AccordionItemContainer, HeaderContainer, HeaderText,HeaderIcon, Body } from './styles';

// icon
import {ReactComponent as CheckIc } from '../../../assets/icon/checkIc.svg';
import {ReactComponent as UpdownIc} from '../../../assets/icon/updownIc.svg';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

// const Accordion = ({ title, children }: AccordionProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeAccordion, setActiveAccordion] = useRecoilState(accordionState);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//     setActiveAccordion(title);
//   };

  return (
    <AccordionItemContainer isOpen={isOpen}>

      <HeaderContainer>
        <CheckIc />
        <HeaderText onClick={toggleAccordion}>{title}</HeaderText>
        <UpdownIc />
      </HeaderContainer>

      <Body>{children}</Body>
    </AccordionItemContainer>
  );
};

export default Accordion;