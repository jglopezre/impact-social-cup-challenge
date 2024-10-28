import { FC, useState } from "react";
import { 
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Row,
} from "reactstrap";
import ParticipantForm from "./ParticipantForm";
import CollaboratorForm from "./CollaboratorForm";

const FormsSection: FC = () => {
  const [idOpen, setIdOpen] = useState('');

  const togle = (id: string) => {
    if (idOpen === id) setIdOpen('');
    else setIdOpen(id)
  }

  const closeTab = () => {
    setIdOpen('')
  }

  return (
    <Row
      tag="section"
      className="flex-fill align-items-center"
    >
      <Col
        md={{ size: 8, offset: 2 }}
        lg={{ size: 6, offset: 3 }}
        className=""
      >
        <Accordion  open={idOpen} toggle={togle}>
          <AccordionItem>
            <AccordionHeader
              targetId="participantForm">
              <b>Quiero Participar</b>
            </AccordionHeader>
            <AccordionBody accordionId="participantForm">
              <ParticipantForm closeAction={closeTab}/>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="collaboratorForm">
              <b>Quiero Colaborar</b>
            </AccordionHeader>
            <AccordionBody accordionId="collaboratorForm">
              <CollaboratorForm closeAction={closeTab}/>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </Col>
    </Row>
  )
}

export default FormsSection;