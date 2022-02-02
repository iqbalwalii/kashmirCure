import React from "react";
import { Container, Table } from "react-bootstrap";
import { CheckCircle, Eye, StarFill, XCircle } from "react-bootstrap-icons";

const Reviews = () => {
  return (
    <Container>
      <div className="appointments">
        <h3>Pendind Ratings</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Doctor</th>
              <th>Patient</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dr. House MD</td>
              <td>Sul kak</td>
              <td className="review">
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elit, sed do".slice(
                  0,
                  300
                )}
              </td>
              <td>
                <div className="action__reverse">
                  <CheckCircle size={26} color="#70CF98" />
                  <XCircle size={26} color="#FE906D" />
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Reviews;
