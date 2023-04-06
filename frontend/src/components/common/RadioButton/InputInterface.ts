import { InputHTMLAttributes } from "react";

// RadioButtonGroup에서 사용되는 라디오 버튼의 옵션
export interface IOption {
  label: string;
  name?: string;
  value?: string;
}

// RadioButtonGroup 컴포넌트에서 사용되는 props 정의
export interface IInputGroup {
  options: IOption[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

// RadioButton 컴포넌트에서 사용되는 props 정의
export interface InputElementProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
}
