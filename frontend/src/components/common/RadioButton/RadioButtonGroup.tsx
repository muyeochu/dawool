import { Wrapper } from "./styles";
import { IInputGroup, IOption } from "./InputInterface";
import RadioButton from "./index";


const RadioButtonGroup = ({ options, value, onChange }: IInputGroup) => {
  function renderOptions() {
    return options.map(
      ({ label, name, value: optionValue }: IOption, index) => {
        const shortenedOptionLabel = label.replace(/\s+/g, "");
        const optionId = `radio-option-${shortenedOptionLabel}`;
        const isChecked = value === optionValue;

        return (
          <RadioButton
            value={optionValue}
            label={label}
            key={optionId}
            id={optionId}
            name={name}
            onChange={onChange}
            checked={isChecked}
          />
        );
      }
    );
  }
  return <Wrapper>{renderOptions()}</Wrapper>;
};
export default RadioButtonGroup;
