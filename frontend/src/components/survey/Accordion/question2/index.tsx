import React, { useState } from "react";
import { HangjungdongContainer } from "./styles";
import RegionDropdown from "./dropdown";
import styled from "styled-components";

const SecondQuestion = () => {
  const [isCityClicked, setIsCityClicked] = useState(false);
  const [isDistrictClicked, setIsDistrictClicked] = useState(false);

  return (
    <HangjungdongContainer style={{ height: isCityClicked || isDistrictClicked ? "400px" : "auto" }}>
      <RegionDropdown
        isCityClicked={isCityClicked}
        setIsCityClicked={setIsCityClicked}
        isDistrictClicked={isDistrictClicked}
        setIsDistrictClicked={setIsDistrictClicked}
      />
    </HangjungdongContainer>
  );
};

export default SecondQuestion;
