import { FC, FormEvent, useRef } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Spinner
} from "reactstrap";
import { CreateParticipantInput, useCreateNewParticipantMutation } from "../generated/graphql";
import { CustomFormPropsI, ParticipantFormI } from "../types";
import { useErrorModalContext } from "../customHooks/useErrorModalContext";
import { useSuccessModalContext } from "../customHooks/useSuccessModalContext";

const ParticipantForm: FC<CustomFormPropsI> = ({ closeAction }) => {
  const [createNewParticipantMutation, {loading: isLoading}] = useCreateNewParticipantMutation();

  const { setOpen: openErrorModal } = useErrorModalContext();
  const { setOpen: openSuccessModal } = useSuccessModalContext();

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const tiketsRef = useRef<HTMLInputElement>(null);
  

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as unknown as ParticipantFormI;

    const dataInput: CreateParticipantInput = {
      ...data,
      tickets: parseInt(data.tickets)
    }

    createNewParticipantMutation({
      variables: {
        participantInput: dataInput
      },
      onError: openErrorModal,
      onCompleted: (data) => {
        closeAction?.();
        openSuccessModal(data.createParticipant.id);
      },
    })

    if (firstNameRef?.current) firstNameRef.current.value = '';
    if (lastNameRef?.current) lastNameRef.current.value = '';
    if (emailRef?.current) emailRef.current.value = '';
    if (tiketsRef?.current) tiketsRef.current.value = '1';
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
          id="tickets"
          name="tickets"
          placeholder="Tickets"
          type="number"
          defaultValue={1}
          min={1}
          required
          innerRef={tiketsRef}
        />
        <Label for="tickets">Tickets</Label>
      </FormGroup>
      <br />
      <Button color="primary" className="w-100">
        {
          isLoading
          ? <Spinner size="sm" />
          : 'Enviar'
        }
      </Button>
    </Form>
  )
}

export default ParticipantForm;