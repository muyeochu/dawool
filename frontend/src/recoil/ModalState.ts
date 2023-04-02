import { atom } from "recoil";

interface ModalType {
  type: string;
  isOpen: boolean;
  title?: string;
  content: JSX.Element | string;
  callback?: () => any;
}

export const modalState = atom<ModalType>({
  key: "modalState",
  default: {
    type: "alert",
    isOpen: false,
    title: "",
    content: "",
  },
});
