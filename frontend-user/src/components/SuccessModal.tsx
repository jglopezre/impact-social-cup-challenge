import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useSuccessModalContext } from "../customHooks/useSuccessModalContext";
import { FC } from "react";

const SuccessModal: FC = () => {
  const { getState, setClose } = useSuccessModalContext();
  const { isOpen, id } = getState();
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <span className="fs-3">Solicitud enviada con Éxito</span>
      </ModalHeader>
      <ModalBody>
        Se ha registrado con exito la solicitud número&nbsp;<b>{id}</b>.
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={setClose}
          color="primary" >
          Aceptar
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default SuccessModal;