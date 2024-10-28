import { createContext, FC, useMemo, useState } from "react";
import { OpenModalStateI, SimpeReactComponentWithChildrenI, SuccessModalActionContextI } from "../types";

const SuccessModalContext = createContext<SuccessModalActionContextI | null>(null);

const SuccessModalContextProvider: FC<SimpeReactComponentWithChildrenI> = ({ children }) => {
  const [isOpenState, setIsOpenState] = useState<OpenModalStateI>({ isOpen: false });

  const setOpen = (id?: string) => setIsOpenState({isOpen: true, id});

  const setClose = () => setIsOpenState({ isOpen: false });

  const getState = () => isOpenState;

  const modalActions = useMemo(() => ({
    setOpen,
    setClose,
    getState
  }), [isOpenState.id]);

  return (
    <SuccessModalContext.Provider value={modalActions}>
      {children}
    </SuccessModalContext.Provider>
  );
}

export {
  SuccessModalContext,
  SuccessModalContextProvider
}