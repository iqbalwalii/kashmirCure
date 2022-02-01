import React from "react";
import { Container, Table } from "react-bootstrap";
const Doctors = () => {
  return (
    <>
      <div className="appointments">
        <h4>Doctors</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Speciality</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Irfan</td>
              <td>Male</td>
              <td>Pulmonologist</td>
              <td>5</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Irfan</td>
              <td>Male</td>
              <td>01-02-2022</td>
              <td>02:34 PM</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Irfan</td>
              <td>Male</td>
              <td>01-02-2022</td>
              <td>02:34 PM</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Irfan</td>
              <td>Male</td>
              <td>01-02-2022</td>
              <td>02:34 PM</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Irfan</td>
              <td>Male</td>
              <td>01-02-2022</td>
              <td>02:34 PM</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Irfan</td>
              <td>Male</td>
              <td>01-02-2022</td>
              <td>02:34 PM</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Irfan</td>
              <td>Male</td>
              <td>01-02-2022</td>
              <td>02:34 PM</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Irfan</td>
              <td>Male</td>
              <td>01-02-2022</td>
              <td>02:34 PM</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Irfan</td>
              <td>Male</td>
              <td>01-02-2022</td>
              <td>02:34 PM</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Doctors;
