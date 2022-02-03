import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
const Login = () => {
  return (
    <Container>
      <Row className="appointments mt-5">
        <Col xs={6}>
          <Image
            src="/assets/images/logo.svg"
            width={800}
            height={800}
            alt="logo"
          />
        </Col>
        <Col xs={6} className="form">
          <Form>
            <Form.Group controlId="formBasicEmail" className="mt-1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="password" className="mt-1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="mt-3">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
