import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../services/loginService";
import { useRouter } from "next/router";
import Device from "../Components/Device";
import { useEffect } from "react";
function Reset(props) {
	const { user } = props;
	const router = useRouter();
	useEffect(() => {
		if (user?.token) {
			router.push("/dashboard");
		}
	}, [router, user?.token]);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		login(data).then((res) => {
			props.dispatch({
				type: "SET_USER",
				payload: res.data,
			});
			router.push("/login");
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
