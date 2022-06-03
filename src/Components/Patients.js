import React, { useState, useEffect } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import { getPatients, deletePatient } from "../services/PatientService";
import { connect } from "react-redux";
import Link from "next/link";
// import { Trash } from "react-bootstrap-icons";
import { Pagination } from "react-bootstrap";
const Patients = (props) => {
	const { patients, dashboard } = props;
	let [active, setActive] = useState(1);
	let items = [];
	const pages = Math.ceil(dashboard?.total_patients / 10);
	const handleRequest = (num) => {
		getPatients(num).then((res) => {
			setActive(num);
			props.dispatch({
				type: "GET_PATIENTS",
				payload: res.patients,
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
	const [list, setList] = useState(12);
	return (
		<>
			<div className="appointments">
				<h4>Patients</h4>
				<Table striped hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Gender</th>
							<th>Phone</th>
							<th>City</th>
							<th>State</th>
							{/* <th>Status</th> */}
							{/* <th>Action</th> */}
						</tr>
					</thead>
					<tbody>
						{patients?.slice(0, list)?.map((patient, index) => {
							return (
								<Link
									href={`/patient/${patient._id}`}
									key={index}
								>
									<tr key={patient?._id}>
										<td>{index + 1}</td>
										<td>{patient?.name}</td>
										<td>{patient?.gender}</td>
										<td>{patient?.phone}</td>
										<td>{patient?.address?.city}</td>
										<td>{patient?.address?.state}</td>
										{/* <td>{patient?.staus === 0 ? "Not Treated" : "Treated"}</td> */}
										{/* <td>
                    <Button
                      variant="danger"
                      onClick={() => onDeleteHandler(patient?._id)}
                    >
                      <Trash />
                    </Button>
                  </td> */}
									</tr>
								</Link>
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
	return {
		patients: state.patients,
		dashboard: state.dashboard,
	};
};
export default connect(mapStateToProps)(Patients);
