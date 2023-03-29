import { InputHTMLAttributes } from "react";

// RadioButtonGroup에서 사용되는 라디오 버튼의 옵션
export interface IOption {
  label: string;  // 라디오 버튼 옆에 나타날 텍스트
  name?: string;  // 라디오 버튼 그룹의 name 속성 값
  value?: string; // 선택된 라디오 버튼의 value
}

// RadioButtonGroup 컴포넌트에서 사용되는 props 정의
export interface IInputGroup {
  options: IOption[]; // IOption의 배열로 라디오 버튼의 옵션
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // 라디오 버튼이 선택될 때 호출되는 콜백 함수
  value?: string;
}

// RadioButton 컴포넌트에서 사용되는 props 정의
export interface InputElementProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string; // 라디오 버튼 옆에 나타날 텍스트
  id?: string;   // 라디오 버튼의 id 속성 값
}
