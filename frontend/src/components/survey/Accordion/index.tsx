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
  isOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  id,
  isOpen = false,
}) => {
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
  const [isAccordionOpen, setIsAccordionOpen] = useState(
    id === "firstAccordion" ? true : isOpen
  );
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <AccordionItemContainer isopen={isAccordionOpen.toString()}>
      <HeaderContainer
        onClick={toggleAccordion}
        isopen={isAccordionOpen.toString()}
      >
        <HeaderCheckTextContainer>
          {stateValue !== "" && stateValue.length !== 0 ? (
            <CheckedIc />
          ) : (
            <CheckIc />
          )}

          <HeaderText>{title}</HeaderText>
        </HeaderCheckTextContainer>

        <UpdownIcStyle isopen={isAccordionOpen.toString()} />
      </HeaderContainer>

      {isAccordionOpen && <BodyContainer>{children}</BodyContainer>}
    </AccordionItemContainer>
  );
};

export default Accordion;
