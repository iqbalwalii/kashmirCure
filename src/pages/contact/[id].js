import { useState } from "react";
import { Row, Col, Table, Button, Form } from "react-bootstrap";
import Side from "../../Components/Navigator";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { updateContact } from "../../services/ContactService";
const Contact = (props) => {
	console.log(props);
	const router = useRouter();
	const [edit, setEdit] = useState(false);
	const [data, setData] = useState("");
	const id = router.query.id;
	const { contact } = props;
	const onSubmitHandler = (e) => {
		e.preventDefault();
		updateContact(contact?._id, edit, data).then((res) => {
			console.log(res);
			props.dispatch({
				type: "GET_CONTACT",
				payload: res.data,
			});
			setEdit(false);
		});
		router.push("/dashboard");
	};

	return (
		<Row>
			<Col xs={2}>
				<Side />
			</Col>
			<Col xs={9}>
				<Row className="mt-3">
					<Table striped bordered hover responsive>
						<thead>
							<tr>
								<th>Key</th>
								<th>Details</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								{/* <td>Heading</td> */}
								{/* <td>{contact?.heading}</td> */}
								{/* <td>
									<Button
										variant="dark"
										onClick={() => setEdit("heading")}
									>
										Edit
									</Button>
								</td> */}
							</tr>
							<tr>
								<td>Whatsapp</td>
								<td>{contact?.whatsapp}</td>
								<td>
									<Button
										variant="dark"
										onClick={() => setEdit("whatsapp")}
									>
										Edit
									</Button>
								</td>
							</tr>
							<tr>
								<td>Mobile</td>
								<td>{contact?.phone}</td>
								<td>
									<Button
										variant="dark"
										onClick={() => setEdit("phone")}
									>
										Edit
									</Button>
								</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>{contact?.email}</td>
								<td>
									<Button
										variant="dark"
										onClick={() => setEdit("email")}
									>
										Edit
									</Button>
								</td>
							</tr>
							<tr>
								<td>Instagram</td>
								<td>{contact?.instagram}</td>
								<td>
									<Button
										variant="dark"
										onClick={() => setEdit("instagram")}
									>
										Edit
									</Button>
								</td>
							</tr>
							<tr>
								<td>LinkedIn</td>
								<td>{contact?.linkedin}</td>
								<td>
									<Button
										variant="dark"
										onClick={() => setEdit("linkedin")}
									>
										Edit
									</Button>
								</td>
							</tr>
							<tr>
								<td>twitter</td>
								<td>{contact?.twitter}</td>
								<td>
									<Button
										variant="dark"
										onClick={() => setEdit("twitter")}
									>
										Edit
									</Button>
								</td>
							</tr>
						</tbody>
					</Table>
				</Row>
			</Col>
			{edit !== false && (
				<Row>
					<Col xs={{ span: 6, offset: 4 }}>
						<Form>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>{edit}</Form.Label>
								<Form.Control
									type="text"
									placeholder={edit}
									onChange={(e) => {
										setData(e.target.value);
									}}
									value={data}
								/>
							</Form.Group>
							<div className="d-grid">
								<Button
									variant="dark"
									className="mt-2"
									type="submit"
									onClick={onSubmitHandler}
								>
									Update
								</Button>
							</div>
						</Form>
					</Col>
				</Row>
			)}
		</Row>
	);
};
const mapStateToProps = (state) => {
	return {
		contact: state.contact,
		tab: state.tab,
	};
};
export default connect(mapStateToProps)(Contact);
