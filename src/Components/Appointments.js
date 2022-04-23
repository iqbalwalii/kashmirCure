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
							<th>Time</th>
							<th>Age</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{appointments?.slice(0, 5)?.map((patient, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{patient?.name}</td>
									<td>{patient?.start_date?.slice(0, 10)}</td>
									<td>{patient?.start_time?.slice(0, 10)}</td>
									<td>{patient?.age}</td>
									<td>{patient?.appointment_status}</td>
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
