import {
  createContext,
  FC,
  ReactNode,
  useMemo,
  useState
} from "react";
import { ContextMutationDataToExposeI, ContextFormMutationDataI } from "../types";

const FormDataMutationContext = createContext<ContextMutationDataToExposeI | null>(null);

const FormDataMutationContextProvider: FC<{children: ReactNode}> = ({children}) => {
  const [contextData, setContextData] = useState<ContextFormMutationDataI>({});

  const getData = () => {
    return contextData;
  }

  const setData = (data: ContextFormMutationDataI) => {
    setContextData(data);
    return data;
  }

  const contextDataToExpose = useMemo(() => ({
    getData,
    setData
  }), [contextData]);

  return (
    <FormDataMutationContext.Provider value={contextDataToExpose}>
      {children}
    </FormDataMutationContext.Provider>
  )
}

export {
  FormDataMutationContext,
  FormDataMutationContextProvider,
}