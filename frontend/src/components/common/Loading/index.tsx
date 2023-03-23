import React from "react";
import Lottie from "lottie-react";
import loading from "../../../assets/lottie/loading.json"
import { LottieContainer } from "./styles";

function Loading() {
  return (
    <LottieContainer>
      <Lottie animationData={loading}/>
    </LottieContainer>
  )
}

export default Loading;