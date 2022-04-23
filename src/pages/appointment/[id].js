import { useEffect } from "react";
import { Card, Row, Col, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { getAppointment } from "../../services/AppointmentService";
import Side from "../../Components/Navigator";
import Link from "next/link";
const Appointment = (props) => {
	const router = useRouter();
	const id = router.query.id;
	const { appointment } = props;
	const data = appointment?.doctor;
	console.log(appointment);
	useEffect(() => {
		if (router.isReady) {
			getAppointment(id).then((res) => {
				props.dispatch({
					type: "GET_APPOINTMENT",
					payload: res.data,
				});
			});
		}
	}, [router, id]);
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
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Doctor Name</td>
								<td>{data?.doctor_name}</td>
							</tr>
							<tr>
								<td>Patient Name</td>
								<td>{data?.patient_name}</td>
							</tr>
							<tr>
								<td>Status</td>
								<td>
									{data?.appointment_status} <br />
									{data?.appointment_status === "Cancel" ? (
										<div>
											<span>
												reason:&nbsp;
												{
													data?.cancel_details
														?.cancel_reason
												}
											</span>
											<br />
											<span>
												date:&nbsp;
												{data?.cancel_details?.cancel_date
													.toString()
													?.slice(0, 10)}
											</span>
											<br />
											<span>
												By:&nbsp;
												{data?.cancel_details
													?.cancel_by ==
												data?.doctor_id.toString()
													? "Doctor"
													: "Patient"}
											</span>
										</div>
									) : null}
								</td>
							</tr>
							<tr>
								<td>Charges</td>
								<td>Rs &nbsp;{data?.charges}</td>
							</tr>
							<tr>
								<td>Discount</td>
								<td>
									Rs &nbsp;
									{`${data?.discount}  (${data?.coupon})`}
								</td>
							</tr>
							{/* <tr>
								<td>Applied Coupon</td>
								<td>{data?.coupon || "none"}</td>
							</tr> */}
							<tr>
								<td>Paid Amount</td>
								<td>
									Rs &nbsp;
									{data?.razorpay_order?.amount / 100}
								</td>
							</tr>
							<tr>
								<td>Payment status</td>
								<td>
									{
										data?.payment_status[
											data?.payment_status.length - 1
										]?.state
									}
								</td>
							</tr>
							<tr>
								<td>Started treatment</td>
								<td>{data?.has_started ? "Yes" : "No"}</td>
							</tr>
							{/* <tr>
                <td>Followed Up</td>
                <td>{data?.is_followup ? "Yes" : "No"}</td>
              </tr> */}
						</tbody>
					</Table>
				</Row>
				<Row>
					<Col className="d-flex justify-content-center">
						<Link href={`/doctor/${data?.doctor_id}`}>
							<Card
								className="mx-3"
								style={{ width: "9rem", cursor: "pointer" }}
							>
								<Card.Img
									variant="top"
									src={`${process.env.NEXT_PUBLIC_API_URL}/files/${data?.doctor_picture}`}
								/>
								<Card.Body>
									<Card.Text>
										Dr. {data?.doctor_name}
									</Card.Text>
								</Card.Body>
							</Card>
						</Link>

						<Link href={`/patient/${data?.patient_id}`}>
							<Card
								className="mx-3"
								style={{ width: "9rem", cursor: "pointer" }}
							>
								<Card.Img
									variant="top"
									src={`${process.env.NEXT_PUBLIC_API_URL}/files/${data?.patient_picture}`}
								/>
								<Card.Body>
									<Card.Text>{data?.patient_name}</Card.Text>
								</Card.Body>
							</Card>
						</Link>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
const mapStateToProps = (state) => {
	return {
		appointment: state.appointment,
	};
};
export default connect(mapStateToProps)(Appointment);
