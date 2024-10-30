import { useContext } from "react"
import { ErrorModalContext } from "../contexts/ErrorModalContext"

export const useErrorModalContext = () => {
  const context = useContext(ErrorModalContext);

  if(!context) throw new Error('ErrorModalContext must be wrapped by ErrorsModalProvider');

  return context
}
