import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../services/loginService";
import { useRouter } from "next/router";
const Index = (props) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    login(data).then((res) => {
      console.log(res);
      props.dispatch({
        type: "SET_USER",
        payload: res.data,
      });
      router.push("/dashboard");
    });
  };
  return (
    <Container>
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
    </Container>
  );
};
const mapStateToProps = (state) => {
  return { ...state, user: state.user };
};
export default connect(mapStateToProps)(Index);
