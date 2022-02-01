import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { CheckCircle, Eye, XCircle } from "react-bootstrap-icons";
const Appointments = () => {
  return (
    <>
      <div className="appointments">
        <h4>Recent Appoitments</h4>
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
      </div>
    </>
  );
};

export default Appointments;
