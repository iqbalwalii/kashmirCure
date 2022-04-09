import React, { useEffect } from "react";
import { Container, Row, Tab, Col, Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteAd, getAd } from "../../services/AdService";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
const Ad = (props) => {
  const router = useRouter();
  const id = router.query.id;
  const onDeleteHandler = () => {
    deleteAd(id).then((res) => {
      router.push("/dashboard");
      props.dispatch({ type: "SET_TAB", payload: "ads" });
    });
  };
  const { ad } = props;
  useEffect(() => {
    if (router.isReady) {
      getAd(id).then((res) => {
        props.dispatch({ type: "SET_AD", payload: res.data.Ad });
      });
    }
  }, [router, id]);
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={11}>
          <h1>
            <Link href="/">
              <a style={{ color: "blue", textDecoration: "none" }}>Kiadah</a>
            </Link>
          </h1>
        </Col>
        <Col xs={12} md={1}>
          <Button variant="danger" onClick={onDeleteHandler}>
            Delete
          </Button>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Key</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>{ad?.title}</td>
            </tr>
            {/* <tr>
              <td>Status</td>
              <td>{ad?.isActive === false ? "Inactive" : "Active"}</td>
            </tr> */}
            <tr>
              <td>Description</td>
              <td>{ad?.description}</td>
            </tr>
          </tbody>
          <Image src={`/${ad?.image}`} width={1000} height={300} />
        </Table>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    ad: state.ad,
    tab: state.tab,
  };
};
export default connect(mapStateToProps)(Ad);
