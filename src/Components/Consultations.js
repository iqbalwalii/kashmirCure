import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { CheckCircle, Eye, XCircle } from "react-bootstrap-icons";

const Consultations = () => {
  return (
    <Container>
      <div className="appointments">
        <Row>
          <Col xs={12}>
            <h3>Appointments</h3>
          </Col>
        </Row>

        <Row className="mt-4 p-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Irfan</td>
                <td>Male</td>
                <td>01-02-2022</td>
                <td>02:34 PM</td>
                <td className="action">
                  <CheckCircle size={23} color="#70CF98" />
                  <Eye size={23} color="#3F8DFD" />
                  <XCircle size={23} color="#FE906D" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Irfan</td>
                <td>Male</td>
                <td>01-02-2022</td>
                <td>02:34 PM</td>
                <td className="action">
                  <CheckCircle size={23} color="#70CF98" />
                  <Eye size={23} color="#3F8DFD" />
                  <XCircle size={23} color="#FE906D" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Irfan</td>
                <td>Male</td>
                <td>01-02-2022</td>
                <td>02:34 PM</td>
                <td className="action">
                  <CheckCircle size={23} color="#70CF98" />
                  <Eye size={23} color="#3F8DFD" />
                  <XCircle size={23} color="#FE906D" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Irfan</td>
                <td>Male</td>
                <td>01-02-2022</td>
                <td>02:34 PM</td>
                <td className="action">
                  <CheckCircle size={23} color="#70CF98" />
                  <Eye size={23} color="#3F8DFD" />
                  <XCircle size={23} color="#FE906D" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Irfan</td>
                <td>Male</td>
                <td>01-02-2022</td>
                <td>02:34 PM</td>
                <td className="action">
                  <CheckCircle size={23} color="#70CF98" />
                  <Eye size={23} color="#3F8DFD" />
                  <XCircle size={23} color="#FE906D" />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Irfan</td>
                <td>Male</td>
                <td>01-02-2022</td>
                <td>02:34 PM</td>
                <td className="action">
                  <CheckCircle size={23} color="#70CF98" />
                  <Eye size={23} color="#3F8DFD" />
                  <XCircle size={23} color="#FE906D" />
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Irfan</td>
                <td>Male</td>
                <td>01-02-2022</td>
                <td>02:34 PM</td>
                <td className="action">
                  <CheckCircle size={23} color="#70CF98" />
                  <Eye size={23} color="#3F8DFD" />
                  <XCircle size={23} color="#FE906D" />
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Irfan</td>
                <td>Male</td>
                <td>01-02-2022</td>
                <td>02:34 PM</td>
                <td className="action">
                  <CheckCircle size={23} color="#70CF98" />
                  <Eye size={23} color="#3F8DFD" />
                  <XCircle size={23} color="#FE906D" />
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Irfan</td>
                <td>Male</td>
                <td>01-02-2022</td>
                <td>02:34 PM</td>
                <td className="action">
                  <CheckCircle size={23} color="#70CF98" />
                  <Eye size={23} color="#3F8DFD" />
                  <XCircle size={23} color="#FE906D" />
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </div>
    </Container>
  );
};

export default Consultations;
