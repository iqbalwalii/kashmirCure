import React, { useEffect } from "react";
import { Container, Row, Card, Col, Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteAd, getAd } from "../../services/AdService";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../Components/Navigator";
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
    <Row>
      <Col xs={12} sm={2}>
        <Nav />
      </Col>
      <Col xs={10} className="mt-3">
        <Row>
          {/* <Col xs={12} md={1}>
           
          </Col> */}
        </Row>
        <Card style={{ width: "80%" }}>
          <Card.Img
            variant="top"
            src={`${process.env.NEXT_PUBLIC_API_URL}/files/${ad?.image}`}
          />
          <Card.Body>
            <Card.Title>{ad?.title}</Card.Title>
            <Card.Text>{ad?.description}</Card.Text>
            <Button variant="danger" onClick={onDeleteHandler}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    // </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    ad: state.ad,
    tab: state.tab,
  };
};
export default connect(mapStateToProps)(Ad);
