import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useErrorModalContext } from "../customHooks/useErrorModalContext"

const ErrorModal = () => {
  const { getState, setClose } = useErrorModalContext();

  return (
    <Modal isOpen={getState()}>
      <ModalHeader>
        <span className="fs-3">Ocurrió un Error</span>
      </ModalHeader>
      <ModalBody>
        Hubo un problema con la comunicación, por favor intenta mas tarde.
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={setClose}
          color="secondary" >
          Volver
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ErrorModal;