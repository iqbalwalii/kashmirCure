import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { CheckCircle, Eye, XCircle } from 'react-bootstrap-icons';
const Appointments = () => {
	return (
		<>
			<div className='appointments_main'>
				<h6>Recent Appointments</h6>
				<Table striped hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Gender</th>
							<th>Date</th>
							<th>Time</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Irfan</td>
							<td>Male</td>
							<td>01-02-2022</td>
							<td>05:32 PM</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Irfan</td>
							<td>Male</td>
							<td>01-02-2022</td>
							<td>05:32 PM</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Irfan</td>
							<td>Male</td>
							<td>01-02-2022</td>
							<td>05:32 PM</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Irfan</td>
							<td>Male</td>
							<td>01-02-2022</td>
							<td>05:32 PM</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Irfan</td>
							<td>Male</td>
							<td>01-02-2022</td>
							<td>05:32 PM</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</>
	);
};

export default Appointments;
