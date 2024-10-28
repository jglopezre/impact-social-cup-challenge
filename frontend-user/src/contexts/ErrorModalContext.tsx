import { createContext, FC, useMemo, useState } from "react";
import { ErrorModalActionsContextI, SimpeReactComponentWithChildrenI } from "../types";

const ErrorModalContext = createContext<ErrorModalActionsContextI | null>(null);

const ErrorModalContextProvider: FC<SimpeReactComponentWithChildrenI> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpen = () => setIsOpen(true);

  const setClose = () => setIsOpen(false);

  const getState = () => isOpen

  const errorStateActions = useMemo<ErrorModalActionsContextI>(() => ({
    setOpen,
    setClose,
    getState,
  }),[isOpen])

  return (
    <ErrorModalContext.Provider value={errorStateActions}>
      {children}
    </ErrorModalContext.Provider>
  )
}

export {
  ErrorModalContext,
  ErrorModalContextProvider
}