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
  onClick?: (event: React.MouseEvent) => void;
}

const DetailBtn = ({ type, text, icType, disable, onClick }: ButtonProps) => {
  const btnType =
    type === "info"
      ? "info"
      : type === "default"
      ? "default"
      : type === "category"
      ? "category"
      : type === "add"
      ? "add"
      : "delete";

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
      className={`DetailBtn_${btnType}`}
      disable={disable?.toString()}
      onClick={onClick}
    >
      {btnType === "default" && (
        <ButtonIc src={icSrc} disable={disable?.toString()} />
      )}
      <ButtonText
        className={`DetailBtn_${btnType}`}
        disable={disable?.toString()}
      >
        {text}
      </ButtonText>
    </ButtonStyle>
  );
};

export default DetailBtn;
