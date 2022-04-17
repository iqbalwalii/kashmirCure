import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Pagination } from "react-bootstrap";
import { getContact } from "../services/ContactService";
import { Table, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
const Contact = (props) => {
  const router = useRouter();
  const { contacts, dashboard } = props;
  console.log("sssssssssssssssss", props);
  let [active, setActive] = useState(1);
  let items = [];
  const pages = Math.ceil(dashboard?.total_contacts / 10);
  const handleRequest = (num) => {
    getContact(num).then((res) => {
      console.log("contact", res.data.contact);
      setActive(num);
      props.dispatch({
        type: "GET_CONTACTS",
        payload: res.data.contact,
      });
    });
  };
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleRequest(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  useEffect(() => {
    handleRequest(active);
  }, []);
  const onClickHandler = (contact) => {
    props.dispatch({
      type: "GET_CONTACT",
      payload: contact,
    });
    router.push(`contact/${contact._id}`);
  };
  return (
    <>
      <div className="appointments">
        <h4> Contacts</h4>
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Whatsapp</th>
              <th>Date</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {contacts?.map((patient, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    onClickHandler(patient);
                  }}
                >
                  <td>{index + 1}</td>
                  <td>{patient?.email}</td>
                  <td>{patient?.whatsapp}</td>
                  <td>{patient?.createdAt?.slice(0, 10)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <Row>
          <Col md={{ span: 2, offset: 5 }}>
            <Pagination size="sm">{items}</Pagination>
          </Col>
        </Row>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state,
    contacts: state.contacts,
  };
};
export default connect(mapStateToProps)(Contact);
