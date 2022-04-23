import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPatient } from "../../services/PatientService";
import { Container, Table, Row, Col } from "react-bootstrap";
import Side from "../../Components/Navigator";
import { useRouter } from "next/router";
const Patient = (props) => {
  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    getPatient(id).then((res) => {
      props.dispatch({
        type: "GET_PATIENT",
        payload: res.patient,
      });
      console.log(res);
    });
  }, []);
  const { patient } = props;
  return (
    <>
      <Row>
        <Col xs={2}>
          <Side />
        </Col>
        <Col xs={9} className="mt-3">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Key</th>
                <th>Details</th>
              </tr>
            </thead>
            {/* <tbody>
              <tr>
                <td>Name</td>
                <td>{doctor?.name}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{doctor?.gender}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{doctor?.phone}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td></td>
              </tr>
              <tr>
                <td>Starting Date</td>
                <td>{doctor?.createdAt?.slice(0, 10)}</td>
              </tr>
              <tr>
                <td>Approval</td>
                <td>
                  <Switch
                    checked={doctor?.is_verified}
                    onChange={onChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>Status</td>
                <td>
                  <Switch
                    checked={doctor?.isActive}
                    onChange={onStatusHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>Documents</td>
                <td>
                  {doctor?.documents?.map((document, index) => {
                    return (
                      <Link
                        href={`${process.env.NEXT_PUBLIC_API_URL}/files/${document}`}
                        key={index}
                      >
                        <a target="_blank">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}/files/${document}`}
                            width="100px"
                            height="100px"
                            alt="doc"
                          />
                        </a>
                      </Link>
                    );
                  })}
                </td>
              </tr>
            </tbody> */}
          </Table>
        </Col>
      </Row>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
    patient: state.patient,
  };
};
export default connect(mapStateToProps)(Patient);
