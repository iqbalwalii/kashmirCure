import React, { useEffect, useState } from "react";
import connect from "react-redux";
import { Container, Row, Col, Form } from "react-bootstrap";
import { doctorSchema } from "../utils/Schemas/doctorUpdate";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const UpdateDoctor = (props) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(doctorSchema),
  });
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                {...register("name")}
              />
            </Form.Group>
            <Form.Group controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gender"
                name="gender"
                {...register("gender")}
              />
            </Form.Group>
            <Form.Group controlId="formBasicphone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                name="phone"
                {...register("phone")}
              />
            </Form.Group>
            <Form.Group controlId="formBasicaddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                {...register("address")}
              />
            </Form.Group>
            <Form.Group controlId="formBasicdate">
              <Form.Label>Practicing From</Form.Label>
              <Form.Control
                type="date"
                placeholder="Address"
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
                type="text"
                placeholder="slots seprated by comma"
                name="available_slots"
                {...register("available_slots")}
              />
            </Form.Group>
            <Form.Group controlId="formBasiccounter">
              <Form.Label>Recommendation Count</Form.Label>
              <Form.Control
                type="text"
                placeholder="Recommendation Count"
                name="recommendation_count"
                {...register("recommendation_count")}
              />
            </Form.Group>
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
