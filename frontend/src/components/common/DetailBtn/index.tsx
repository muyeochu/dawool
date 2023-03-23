import { ButtonStyle, ButtonText, ButtonIc } from "./styles";

import earIc from "../../../assets/icon/earIc.svg";
import eyeIc from "../../../assets/icon/eyeIc.svg";
import oldmanIc from "../../../assets/icon/oldmanIc.svg";
import bathchairIc from "../../../assets/icon/bathchairIc.svg";
import toddlerIc from "../../../assets/icon/toddlerIc.svg";

interface ButtonProps {
  type?: string | undefined;
  disable?: number | undefined;
  text: string;
  icType?: string | undefined;
}

const DetailBtn = ({ type, text, icType, disable }: ButtonProps) => {
  const btnType = type === "info" ? type : "default";

  let icSrc =
    icType === "ear"
      ? earIc
      : icType === "eye"
      ? eyeIc
      : icType === "oldman"
      ? oldmanIc
      : icType === "bathchair"
      ? bathchairIc
      : icType === "toddler"
      ? toddlerIc
      : "none";

  return (
    <ButtonStyle
      className={`ButtonNon_${btnType}`}
      disable={disable?.toString()}
    >
      {btnType === "default" && (
        <ButtonIc src={icSrc} disable={disable?.toString()} />
      )}
      <ButtonText disable={disable?.toString()}>{text}</ButtonText>
    </ButtonStyle>
  );
};

export default DetailBtn;
