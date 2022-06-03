import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
const UpdateDoctor = (props) => {
	const { doctor } = props;
	const { register, handleSubmit } = useForm();

	return (
		<Container>
			<Row>
				<Col xs={12} md={6}>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Form.Group controlId="formBasicName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder={doctor?.name}
								name="name"
								{...register("name")}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicGender">
							<Form.Label>Gender</Form.Label>
							<Form.Control
								type="text"
								placeholder={doctor?.gender}
								name="gender"
								{...register("gender")}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicphone">
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type="number"
								placeholder={doctor?.phone}
								name="phone"
								{...register("phone")}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicaddress">
							<Form.Label>Address</Form.Label>
							<Form.Control
								type="text"
								placeholder={
									doctor?.address?.city +
									" " +
									doctor?.address?.state +
									" " +
									doctor?.address?.country
								}
								name="address"
								{...register("address")}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicdate">
							<Form.Label>Practicing From</Form.Label>
							<Form.Control
								type="date"
								placeholder={doctor?.practicing_from}
								name="date"
								{...register("practicing_from")}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicspecial">
							<Form.Label>Specializations</Form.Label>
							<Form.Control
								type="text"
								placeholder="Specializations seprated by comma"
								name="specializations"
								{...register("specializations")}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicslots">
							<Form.Label>Available Slots</Form.Label>
							<Form.Control
								type="datetime-local"
								placeholder="slots seprated by comma"
								name="available_slots"
								{...register("available_slots")}
							/>
						</Form.Group>
						<Form.Group controlId="formBasiccounter">
							<Form.Label>Recommendation Count</Form.Label>
							<Form.Control
								type="number"
								placeholder={doctor?.recommendation_count}
								name="recommendation_count"
								{...register("recommendation_count")}
							/>
						</Form.Group>
						<Form.Group controlId="formBasiccounter">
							<Form.Label>Qualifications</Form.Label>
							<Form.Control
								type="text"
								placeholder={doctor?.recommendation_count}
								name="recommendation_count"
								{...register("recommendation_count")}
							/>
						</Form.Group>
						<Form.Group controlId="formBasiccounter">
							<Form.Label>Documents</Form.Label>
							{doctor?.documents?.map((doc, idx) => (
								<Form.Control
									type="text"
									key={idx}
									placeholder={doc}
									name="documents"
									{...register("documents")}
								/>
							))}
						</Form.Group>
						<div className="d-grid mt-3">
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</div>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
const mapStateToProps = (state) => {
	return {
		doctor: state.doctor,
	};
};
export default connect(mapStateToProps)(UpdateDoctor);
