import { Table, Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getDoctorPayouts, getDoctors } from "../services/DoctorService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
const Doctors = (props) => {
	const { doctors, dashboard } = props;
	console.log(dashboard?.total_doctors);
	let [active, setActive] = useState(1);
	let items = [];
	const pages = Math.ceil(dashboard?.total_doctors / 10);
	const handleRequest = (num, category) => {
		getDoctors(num, category).then((res) => {
			setActive(num);
			props.dispatch({
				type: "GET_DOCTORS",
				payload: res,
			});
		});
	};
	for (let number = 1; number <= pages; number++) {
		items.push(
			<Pagination.Item
				key={number}
				active={number === active}
				onClick={() => handleRequest(number)}
			>
				{number}
			</Pagination.Item>
		);
	}
	useEffect(() => {
		handleRequest(active);
	}, []);
	useEffect(() => {
		getDoctors(active).then((res) => {
			props.dispatch({
				type: "GET_ACTIVE_DOCTORS",
				payload: res,
			});
		});
	}, [doctors, active]);

	return (
		<>
			<div className="appointments">
				<div
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<h4>Doctors</h4>
					<div className="d-flex px-4 center">
						<h6 className="text-primary">filters: </h6>
						<p
							onClick={(e) => {
								handleRequest(1, e.target.innerText);
							}}
							className="px-2 text-white bg-dark mx-2 rounded"
						>
							none
						</p>
						<p
							onClick={(e) => {
								handleRequest(1, e.target.innerText);
							}}
							className="px-2 text-white bg-dark mx-2 rounded"
						>
							silver
						</p>
						<p
							onClick={(e) => {
								handleRequest(1, e.target.innerText);
							}}
							className="px-2 text-white bg-dark mx-2 rounded"
						>
							gold
						</p>

						<p
							onClick={(e) => {
								handleRequest(1, e.target.innerText);
							}}
							className="px-2 text-white bg-dark mx-2 rounded"
						>
							diamond
						</p>
					</div>
				</div>
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
								<>
									<Link
										href={`/doctor/${doctor._id}`}
										key={doctor._id}
									>
										<tr>
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
								</>
							);
						})}
					</tbody>
				</Table>

				<Row>
					<Col md={{ span: 2, offset: 5 }}>
						<Pagination size="sm">{items}</Pagination>
					</Col>
				</Row>
			</div>
		</>
	);
};
const mapStateToProps = (state) => {
	return { ...state, doctors: state.doctors, dashboard: state.dashboard };
};
export default connect(mapStateToProps)(Doctors);
