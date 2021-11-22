import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";

ReactDOM.render(
  <Container>
    <Row>
      <Col xs={12} className="d-flex justify-content-center">
        <App />
      </Col>
    </Row>
  
  </Container>,
  document.getElementById("root")
);