import { Table, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Link from "next/link";
import { useState } from "react";
import Paginate from "./Pagination";
const Consultations = (props) => {
  const { appointments, dashboard } = props;
  return (
    <>
      <div className="appointments">
        <h4> Appointments</h4>
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Age</th>
              <th>Status</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {appointments?.map((patient, index) => {
              return (
                <Link href={`appointment/${patient._id}`} key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{patient?.name}</td>
                    <td>{patient?.start_time?.slice(0, 10)}</td>
                    <td>{patient?.age}</td>
                    <td>{patient?.appointment_status}</td>
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
            <Paginate pages={dashboard?.total_appointments / 10} />
          </Col>
        </Row>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    appointments: state.appointments,
    dashboard: state.dashboard,
  };
};
export default connect(mapStateToProps)(Consultations);
