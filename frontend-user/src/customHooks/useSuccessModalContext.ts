import { useContext } from "react";
import { SuccessModalContext } from "../contexts/SuccessModalContext"

export const useSuccessModalContext = () => {
  const context = useContext(SuccessModalContext);

  if (!context) throw new Error('SuccessModalContext must be wrapped by SuccessModalProvider');

  return context;
}
