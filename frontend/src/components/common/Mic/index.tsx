import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import mic from "../../../assets/lottie/mic.json";
import { MicContainer } from "./styles";

const MicAnimation = () => {
  return (
    <MicContainer>
      <Lottie animationData={mic} />
    </MicContainer>
  );
};

export default MicAnimation;
