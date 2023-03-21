import { ButtonStyle, ButtonText, ButtonIc } from "./styles";

interface ButtonProps {
  isIc: boolean | undefined;
  disable?: number | undefined;
  text: string;
  icSrc: string;
}

const ButtonNon = ({ isIc, text, icSrc, disable }: ButtonProps) => {
  return (
    <ButtonStyle disable={disable?.toString()} isIc={isIc?.toString()}>
      {isIc && <ButtonIc src={icSrc} disable={disable?.toString()} />}
      <ButtonText disable={disable?.toString()}>{text}</ButtonText>
    </ButtonStyle>
  );
};

export default ButtonNon;
