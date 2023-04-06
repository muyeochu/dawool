import { useCallback } from "react";
import { useRecoilState } from "recoil";

import { modalState } from "../../recoil/ModalState";

interface OpenModalType {
  type: string;
  title?: string;
  content: JSX.Element | string;
  callback?: () => any;
}

const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const closeModal = useCallback(
    () =>
      setModalDataState((prev) => {
        return { ...prev, isOpen: false };
      }),
    [setModalDataState]
  );

  const openModal = useCallback(
    ({ type, title = "", content, callback }: OpenModalType) =>
      setModalDataState({
        type: type,
        isOpen: true,
        title: title,
        content: content,
        callback: callback,
      }),
    [setModalDataState]
  );

  return { modalDataState, closeModal, openModal };
};

export default useModal;
