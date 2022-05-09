import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { forgetPassword, reset } from "../../services/loginService";
import { useRouter } from "next/router";
import Device from "../../Components/Device";
import { useEffect, useState } from "react";
function Reset(props) {
  const { user } = props;
  const router = useRouter();
  const [errr, setErrr] = useState({ type: "", message: "" });
  useEffect(() => {
    if (user?.token) {
      router.push("/dashboard");
    }
  }, [router, user?.token]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    forgetPassword(data?.email)
      .then((res) => {
        setErrr({ type: "success", message: "Verified" });
        router.push(`/reset/${res.id}`);
        console.log(res);
      })
      .catch((err) => {
        setErrr({ type: "danger", message: "Email doesn't Exist" });
      });
  };
  return (
    <Container>
      {user?.loggedIn !== true ? (
        <>
          <Device />
          <Row className="login">
            <Col xs={12} md={{ span: 4, offset: 4 }}>
              <h3 className="text-center">Reset password</h3>
              {errr && <Alert variant={errr.type}>{errr.message}</Alert>}
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...register("email")}
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
}

const mapStateToProps = (state) => {
  return { ...state, user: state.user };
};
export default connect(mapStateToProps)(Reset);
