import { useContext } from "react"
import { FormDataMutationContext } from "../contexts/formDataMutationContext"

export const useFormDataMutationContext = () => {
  const context = useContext(FormDataMutationContext);

  if(!context) throw new Error('FormDataContext have to be wrapped by a FormDataContextProvider');

  return context;
}
