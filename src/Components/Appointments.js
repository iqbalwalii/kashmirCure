import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getAppointments } from "../services/AppointmentService";
const Appointments = (props) => {
	const { appointments } = props;

	return (
		<>
			<div className="appointments_main">
				<h6>Recent Appointments</h6>
				<Table striped hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Date</th>
							<th>Age</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{appointments
							?.slice(0, 5)
							?.map((appointment, index) => {
								return (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{appointment?.name}</td>
										<td>
											{appointment?.start_time?.slice(
												0,
												10
											)}
										</td>
										<td>{appointment?.age}</td>
										<td>
											{appointment?.appointment_status}
											{appointment.appointment_status ===
											"Cancel" ? (
												<div>
													<span>
														{
															appointment
																.cancel_details
																?.cancel_reason
														}
													</span>
													<br />
													<span>
														appointment
														.cancel_details
														?.cancel_date
													</span>
												</div>
											) : null}
										</td>
									</tr>
								);
							})}
					</tbody>
				</Table>
			</div>
		</>
	);
};
const mapStateToProps = (state) => {
	return {
		appointments: state.appointments,
	};
};
export default connect(mapStateToProps)(Appointments);
