import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getActiveDoctors } from "../services/DoctorService";
import Link from "next/link";
import { useEffect } from "react";
const Doctors = (props) => {
	const { doctors } = props;
	useEffect(() => {
		console.log("first 4eff");
		// getActiveDoctors().then((res) => {
		// 	props.dispatch({
		// 		type: "GET_ACTIVE_DOCTORS",
		// 		payload: res.doctors,
		// 	});
		// });
		getActiveDoctors().then((res) => {
			console.log("first res", res);
			props.dispatch({
				type: "GET_ACTIVE_DOCTORS",
				payload: res,
			});
		});
	}, []);
	console.log(doctors);
	return (
		<>
			<div className="appointments">
				<h4>Approved Active Doctors</h4>
				<Table striped hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Gender</th>
							<th>Speciality</th>
							<th>Status</th>
							<th>Approval</th>
						</tr>
					</thead>
					<tbody>
						{doctors?.map((doctor, index) => {
							return (
								<Link href={`/doctor/${doctor._id}`}>
									<tr key={doctor._id}>
										<td>{index + 1}</td>
										<td>{doctor.name}</td>
										<td>{doctor.gender}</td>
										<td>
											{doctor?.specializations?.map(
												(e) => e?.name + ", "
											)}
										</td>
										<td>
											{doctor?.isActive === false
												? "Inactive"
												: "Active"}
										</td>
										<td>
											{doctor.is_verified === false
												? "Not Approved"
												: "Approved"}
										</td>
									</tr>
								</Link>
							);
						})}
					</tbody>
				</Table>
			</div>
		</>
	);
};
const mapStateToProps = (state) => {
	return { ...state, doctors: state.activeDoctors };
};
export default connect(mapStateToProps)(Doctors);
