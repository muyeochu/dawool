import { atom } from "recoil";

interface ButtonState {
  clicked: boolean;
}

export const buttonState = atom<ButtonState>({
  key: "buttonState",
  default: {
    clicked: false,
  },
});