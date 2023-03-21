import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { StyledButton, ButtonText } from "./styles";
import { surveyState } from "../../../recoil/SurveyState";

export default function SaveBtn() {
  const surveyData = useRecoilValue(surveyState)

  // const handleSubmit = () => {
  //   const dataToSend = { barrier: surveyData.barrier };

  //   fetch("http://example.com/api/survey", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(dataToSend),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log("Data sent successfully!");
  //       } else {
  //         console.error("Failed to send data.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error sending data:", error);
  //     });
  // };
  
  return (
    // <StyledButton onClick={handleSubmit}>
    <StyledButton>
      <ButtonText>저장</ButtonText>
    </StyledButton>
  );
}
