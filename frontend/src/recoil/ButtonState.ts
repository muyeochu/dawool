import { atom } from "recoil";

interface ButtonState {
  clicked: boolean;
}

// button
export const buttonState = atom<ButtonState>({
  key: "buttonState",
  default: {
    clicked: false,
  },
});

// dropdown
export const dropdownState = atom<ButtonState>({
  key: "dropdownState",
  default: {
    clicked: false,
  },
})