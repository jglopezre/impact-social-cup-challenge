import { FC } from "react";
import { Col, Row } from "reactstrap";

const Footer: FC = () => {
  const date = new Date().getFullYear();
  return (
    <Row tag="footer" className="">
      <Col className="d-flex justify-content-center align-items-center">
        &copy;
        Hecho por&nbsp;<a href="https://lodejavi.xyz/" target="_blank" referrerPolicy="no-referrer">JaLopez</a>
        &nbsp;{date}
      </Col>
    </Row>
  )
}

export default Footer;