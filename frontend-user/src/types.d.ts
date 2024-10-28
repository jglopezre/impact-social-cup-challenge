import { ReactNode } from "react"

interface FormDataI {
  firstName: string
  lastName: string
  email: string
}

export interface CollaboratorFormI extends FormDataI {
  phone: string
  company: string
}

export interface ParticipantFormI extends FormDataI {
  tickets: string
}

export interface ContextFormMutationDataI {
  participantData?: ParticipantFormI
  collaboratorData?: CollaboratorFormI
}

export interface ContextMutationDataToExposeI {
  getData: () => ContextFormDataI;
  setData: (data: ContextFormDataI) => ContextFormDataI;
}

export interface CustomFormPropsI {
  closeAction?: VoidFunction
}

export interface SimpeReactComponentWithChildrenI {
  children: ReactNode
}

export interface ErrorModalActionsContextI {
  setOpen: VoidFunction
  setClose: VoidFunction
  getState: () => boolean
}

export interface SuccessModalActionContextI {
  setOpen: (id: string) => void
  setClose: VoidFunction
  getState: () => OpenModalStateI
}

export interface OpenModalStateI {
  isOpen: boolean
  id?: string
}