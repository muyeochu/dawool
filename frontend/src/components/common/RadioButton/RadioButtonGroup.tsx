import { Wrapper } from "./styles";
import { IInputGroup, IOption } from "./InputInterface";
import RadioButton from "./index";

const RadioButtonGroup = ({ options, onChange }: IInputGroup) => {

  // options 배열 순회하며 각각의 옵션에 대한 RadioButton 컴포넌트 렌더링
  function renderOptions() {
    return options.map(({ label, name, disabled }: IOption, index) => {
      const shortenedOptionLabel = label.replace(/\s+/g, "");
      const optionId = `radio-option-${shortenedOptionLabel}`;

      return (
        <RadioButton
          value={label}
          label={label}
          key={optionId}
          id={optionId}
          name={name}
          disabled={disabled}
          defaultChecked={index === 0}
          onChange={onChange}
        />
      );
    });
  }
  return (
      <Wrapper>{renderOptions()}</Wrapper>
  );
};
export default RadioButtonGroup;
