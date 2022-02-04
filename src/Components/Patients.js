import React from 'react';
import { Container, Table } from 'react-bootstrap';
const Patients = () => {
	return (
		<>
			<div className='appointments'>
				<h4>Patients</h4>
				<Table striped hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Gender</th>
							<th>Treated By</th>
							<th>Concern</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Ashrafi Shivalli</td>
							<td>Male</td>
							<td>Dr. Ghulam Qadir</td>
							<td>Cardiology</td>
							<td>2-5-2021</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Ashrafi Shivalli</td>
							<td>Male</td>
							<td>Dr Masse</td>
							<td>Cardiology</td>
							<td>02:34 PM</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Ashrafi Shivalli</td>
							<td>Male</td>
							<td>01-02-2022</td>
							<td>Cardiology</td>
							<td>02:34 PM</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Ashrafi Shivalli</td>
							<td>Male</td>
							<td>01-02-2022</td>
							<td>Cardiology</td>
							<td>02:34 PM</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Ashrafi Shivalli</td>
							<td>Male</td>
							<td>01-02-2022</td>
							<td>Cardiology</td>
							<td>02:34 PM</td>
						</tr>
						<tr>
							<td>6</td>
							<td>Ashrafi Shivalli</td>
							<td>Male</td>
							<td>01-02-2022</td>
							<td>Cardiology</td>
							<td>02:34 PM</td>
						</tr>
						<tr>
							<td>7</td>
							<td>Ashrafi Shivalli</td>
							<td>Male</td>
							<td>01-02-2022</td>
							<td>Cardiology</td>
							<td>02:34 PM</td>
						</tr>
						<tr>
							<td>8</td>
							<td>Ashrafi Shivalli</td>
							<td>Male</td>
							<td>01-02-2022</td>
							<td>Cardiology</td>
							<td>02:34 PM</td>
						</tr>
						<tr>
							<td>9</td>
							<td>Ashrafi Shivalli</td>
							<td>Male</td>
							<td>01-02-2022</td>
							<td>Cardiology</td>
							<td>02:34 PM</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</>
	);
};

export default Patients;
