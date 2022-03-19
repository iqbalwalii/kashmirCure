import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../services/loginService";
import { useRouter } from "next/router";
import Device from "../Components/Device";
import { useEffect } from "react";
const Index = (props) => {
  console.log("first", props);
  const router = useRouter();
  useEffect(() => {
    if (props.user.token) {
      router.push("/dashboard");
    }
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    login(data).then((res) => {
      props.dispatch({
        type: "SET_USER",
        payload: res.data,
      });
      router.push("/dashboard");
    });
  };
  return (
    <Container>
      {Object.keys(props.user).length === 0 ? (
        <>
          <Device />
          <Row className="login">
            <Col xs={12} md={{ span: 4, offset: 4 }}>
              <h3 className="text-center">LOGIN</h3>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter username"
                    {...register("email")}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                  />
                </Form.Group>
                <div className="d-grid mt-3">
                  <Button variant="dark" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return { ...state, user: state.user };
};
export default connect(mapStateToProps)(Index);
