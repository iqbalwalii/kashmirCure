import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { CheckCircle, Eye, XCircle } from 'react-bootstrap-icons';

const Consultations = () => {
	return (
		// <>
		// 	<div className='appointments_main'>
		// 		<h3>Appointments</h3>

		// 		<Table striped hover>
		// 			<thead>
		// 				<tr>
		// 					<th>#</th>
		// 					<th>Patient Name</th>
		// 					<th>Gender</th>
		// 					<th>Date </th>
		// 					<th>Time </th>
		// 					<th>Concerned Doctor</th>
		// 					{/* <th></th> */}
		// 				</tr>
		// 			</thead>

		// 			<tbody>
		// 				{[1, 2, 3, 4, 5, 6, 7].map((item) => {
		// 					return (
		// 						<tr>
		// 							<td>{item}</td>
		// 							<td>Irfan</td>
		// 							<td>Male</td>
		// 							<td>01-02-2022</td>
		// 							<td> 02:34 PM </td>
		// 							<td> Dr Iqbal Wali</td>
		// 							{/* <td className='action'>
		// 							<CheckCircle size={23} color='#70CF98' />
		// 							<Eye size={23} color='#3F8DFD' />
		// 							<XCircle size={23} color='#FE906D' />
		// 						</td> */}
		// 						</tr>
		// 					);
		// 				})}
		// 			</tbody>
		// 		</Table>
		// 	</div>
		// </>
		<>
			<div className='appointments'>
				<h4>Patients</h4>
				<Table striped hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Patient Name</th>
							<th>Gender</th>
							<th>Date </th>
							<th>Time </th>
							<th>Concerned Doctor</th>
							<th>Payment Status</th>
						</tr>
					</thead>
					<tbody>
						{[1, 2, 3, 4, 5, 6, 7].map((item) => {
							return (
								<tr>
									<td>{item}</td>
									<td>Irfan</td>
									<td>Male</td>
									<td>01-02-2022</td>
									<td>02:34 PM </td>
									<td>Dr Iqbal Wali</td>
									{item % 2 == 0 ? (
										<td>Paid</td>
									) : (
										<td>Pending</td>
									)}
									{/* <td className='action'>
									<CheckCircle size={23} color='#70CF98' />
									<Eye size={23} color='#3F8DFD' />
									<XCircle size={23} color='#FE906D' />
								</td> */}
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		</>
	);
};

export default Consultations;
