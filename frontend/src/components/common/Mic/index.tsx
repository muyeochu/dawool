import Lottie from "lottie-react";
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
