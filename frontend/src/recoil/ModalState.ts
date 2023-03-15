import { atom } from "recoil";

interface ModalType {
  isOpen: boolean;
  title: string;
  content: JSX.Element | string;
  callback?: () => any;
}

export const modalState = atom<ModalType>({
  key: "modalState",
  default: {
    isOpen: false,
    title: "",
    content: "",
  },
});
