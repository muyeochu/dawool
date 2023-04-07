import { RadioWrapper, Radio, Label } from "./styles";
import { InputElementProps } from "./InputInterface";

const RadioButton = ({ label, id, value, ...rest }: InputElementProps) => {
  return (
    <RadioWrapper>
      <Radio type="radio" id={id} {...rest} value={value} />
      <Label htmlFor={id}>
        <span>{label}</span>
      </Label>
    </RadioWrapper>
  );
};

export default RadioButton;
