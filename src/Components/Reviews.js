import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";
import { getReviews } from "../services/ReviewService";
import Link from "next/link";
const Reviews = (props) => {
	const { reviews, dashboard } = props;
	let [active, setActive] = useState(1);
	let items = [];
	const pages = Math.ceil(dashboard?.total_reviews / 10);
	const handleRequest = (num) => {
		getReviews(num).then((res) => {
			setActive(num);
			props.dispatch({
				type: "GET_REVIEWS",
				payload: res.data.reviews,
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
	return (
		<Container>
			<div className="appointments">
				<h3> Review Approval</h3>
				<Table striped hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Doctor</th>
							<th>Patient</th>
							<th>Review</th>
							<th>status</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{reviews?.map((review, index) => {
							return (
								<Link href={`review/${review._id}`} key={index}>
									<tr>
										<td>{index + 1}</td>
										<td>{review?.doctor_name}</td>
										<td>{review?.patient_name}</td>
										<td>
											{review?.description.slice(0, 300)}
										</td>
										<td>
											{review?.is_approved
												? "approved"
												: "pending"}
										</td>
										<td>{review.createdAt.slice(0, 10)}</td>
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
		</Container>
	);
};
const mapStateToProps = (state) => {
	return { reviews: state.reviews, dashboard: state.dashboard };
};
export default connect(mapStateToProps)(Reviews);
