import { atom } from "recoil";


interface ButtonState {
  activeButtonId: string;
  buttons: { [key: string]: boolean };
}

export const buttonState = atom<ButtonState>({
  key: "buttonState",
  default: {
    activeButtonId: "btn1",
    buttons: { "buttonState": false }
  },
});