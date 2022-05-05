import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPatient, deletePatient } from "../../services/PatientService";
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import Side from "../../Components/Navigator";
import { useRouter } from "next/router";
const Patient = (props) => {
  const router = useRouter();
  const id = router.query.id;
  const onDeleteHandler = (id) => {
    console.log(id);
    deletePatient(id).then((res) => {
      console.log(res);
      router.push("/dashboard");
    });
  };
  useEffect(() => {
    if (router.isReady) {
      getPatient(id).then((res) => {
        props.dispatch({
          type: "GET_PATIENT",
          payload: res.patient,
        });
        console.log(res);
      });
    }
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
            <tbody>
              <tr>
                <td>Name</td>
                <td className="text-capitalize">{patient?.name}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{patient?.age}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td className="text-capitalize">{patient?.gender}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{patient?.phone}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{patient?.email}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{` ${patient?.address.street} ${patient?.address.city} ${patient?.address.state} ${patient?.address.country} `}</td>
              </tr>
              <tr>
                <td>Blood Group</td>
                <td>{patient?.blood_group}</td>
              </tr>
              <tr>
                <td>Height </td>
                <td>{patient?.height ? patient.height + ` cms` : ""}</td>
              </tr>
              <tr>
                <td>weight </td>
                <td>{patient?.weight ? patient.weight + `  kgs` : ""}</td>
              </tr>
              <tr>
                <td>Action</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => onDeleteHandler(patient?._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
              {/*  <tr>
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
              </tr>*/}
            </tbody>
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
