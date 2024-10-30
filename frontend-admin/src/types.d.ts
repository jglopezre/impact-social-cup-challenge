export interface SimpeReactComponentWithChildrenI {
  children: ReactNode
}

export interface ErrorModalActionsContextI {
  setOpen: VoidFunction
  setClose: VoidFunction
  getState: () => boolean
}