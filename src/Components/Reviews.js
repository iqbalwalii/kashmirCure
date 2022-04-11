import React, { useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { CheckCircle, Eye, StarFill, XCircle } from "react-bootstrap-icons";
import Link from "next/link";
import { connect } from "react-redux";
const Reviews = (props) => {
  const { reviews } = props;
  const [list, setList] = useState(12);
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
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {reviews?.slice(0, list)?.map((review, index) => {
              return (
                <Link href={`review/${review._id}`} key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{review?.doctor_name}</td>
                    <td>{review?.patient_name}</td>
                    <td className="review">
                      {review?.description.slice(0, 300)}
                    </td>
                    <td>{review.createdAt.slice(0, 10)}</td>
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </Table>
        {reviews?.length > list && (
          <Row>
            <Col md={{ span: 2, offset: 5 }}>
              <Button
                onClick={() => {
                  setList(list + 5);
                }}
                variant="dark"
              >
                Load More
              </Button>
            </Col>
          </Row>
        )}
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return { reviews: state.reviews };
};
export default connect(mapStateToProps)(Reviews);
