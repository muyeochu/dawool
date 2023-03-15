import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { accordionState } from './state';
import { Container, Header, Body } from './styles';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useRecoilState(accordionState);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setActiveAccordion(title);
  };

  return (
    <Container isOpen={isOpen}>
      <Header onClick={handleClick}>{title}</Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default Accordion;