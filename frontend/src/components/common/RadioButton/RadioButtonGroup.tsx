import { Wrapper } from "./styles";
import { IInputGroup, IOption } from "./InputInterface";
import RadioButton from "./index";

interface RadioButtonGroupProps extends IInputGroup {
  value: string;
}

const RadioButtonGroup = ({ options, value, onChange }: IInputGroup) => {
  // options 배열 순회하며 각각의 옵션에 대한 RadioButton 컴포넌트 렌더링
  function renderOptions() {
    return options.map(
      ({ label, name, value: optionValue }: IOption, index) => {
        const shortenedOptionLabel = label.replace(/\s+/g, "");
        const optionId = `radio-option-${shortenedOptionLabel}`;
        const isChecked = value === optionValue; // 현재 선택된 값과 optionValue가 일치하는지 확인

        return (
          <RadioButton
            value={optionValue}
            label={label}
            key={optionId}
            id={optionId}
            name={name}
            onChange={onChange}
            checked={isChecked} // 현재 선택된 값에 해당하는 라디오 버튼을 체크한 상태로 렌더링
          />
        );
      }
    );
  }
  return <Wrapper>{renderOptions()}</Wrapper>;
};
export default RadioButtonGroup;
