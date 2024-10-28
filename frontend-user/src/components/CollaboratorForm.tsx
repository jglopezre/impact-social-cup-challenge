import { FC, FormEvent, useRef } from "react";
import { Button, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import { CreateCollaboratorInput, useCreateNewCollaboratorMutation } from "../generated/graphql";
import { CustomFormPropsI } from "../types";
import { useErrorModalContext } from "../customHooks/useErrorModalContext";
import { useSuccessModalContext } from "../customHooks/useSuccessModalContext";

const CollaboratorForm: FC<CustomFormPropsI> = ({ closeAction }) => {
  const [
    createNewCollaborator,
    { loading: isloading }
  ] = useCreateNewCollaboratorMutation();

  const { setOpen: openErrorModal } = useErrorModalContext();
  const { setOpen: openSuccessModal } = useSuccessModalContext();

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as unknown as CreateCollaboratorInput

    createNewCollaborator({
      variables: {
        collaboratorInput: data,
      },
      onError: openErrorModal,
      onCompleted: (data) => {
        closeAction?.()
        openSuccessModal(data.createCollaborator.id);
      },
    })

    if (firstNameRef?.current) firstNameRef.current.value = '';
    if (lastNameRef?.current) lastNameRef.current.value = '';
    if (emailRef?.current) emailRef.current.value = '';
    if (phoneRef?.current) phoneRef.current.value = '';
    if (companyRef?.current) companyRef.current.value = '';
  }

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup floating>
        <Input
          id="firstName"
          name="firstName"
          placeholder="Nombre"
          type="text"
          required
          innerRef={firstNameRef}
        />
        <Label for="firstName">Nombre</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="lastName"
          name="lastName"
          placeholder="Apellido"
          type="text"
          required
          innerRef={lastNameRef}
        />
        <Label for="lastName">Apellido</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          required
          innerRef={emailRef}
        />
        <Label for="email">Email</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="phone"
          name="phone"
          placeholder="Teléfono Personal"
          type="text"
          required
          innerRef={phoneRef}
        />
        <Label for="phone">Teléfono Personal</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="company"
          name="company"
          placeholder="Empresa"
          type="text"
          innerRef={companyRef}
        />
        <Label for="company">Empresa</Label>
      </FormGroup>
      <br />
      <Button
        color="primary"
        className="w-100"
        disabled={isloading}
      >
        {
          isloading
          ? <Spinner size="sm" />
          : 'Enviar'
        }
      </Button>
    </Form>
  )
}

export default CollaboratorForm;