import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAds, createAd, postAd } from "../services/AdService";
import { Table, Row, Col, Button, Form } from "react-bootstrap";
import { XSquareFill } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Pagination } from "react-bootstrap";

import Link from "next/link";
const Advertisements = (props) => {
  const { ads, ad, dashboard } = props;
  const [popup, setPopup] = useState(false);
  const [image, setImage] = useState(false);
  const [status, setStatus] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  let [active, setActive] = useState(1);
  let items = [];
  useEffect(() => {
    getAds(active).then((res) => {
      props.dispatch({
        type: "GET_ADS",
        payload: res.data.ads,
      });
    });
  }, [status]);
  // useEffect(() => {
  //   handleRequest(active);
  // }, []);
  const onSubmit = (data) => {
    createAd(data).then((res) => {
      props.dispatch({
        type: "SET_AD",
        payload: res.data.ad,
      });
      setImage(true);
    });
  };
  const onRegister = (data) => {
    postAd(ad?._id, data.image[0]).then((res) => {
      router.push("/");
    });
  };

  const pages = Math.ceil(dashboard?.total_ads / 10);
  const handleRequest = (num) => {
    getAds(num).then((res) => {
      setActive(num);
      props.dispatch({
        type: "GET_ADS",
        payload: res.data.reviews,
      });
    });
    setStatus(true);
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
  return (
    <div className="appointments">
      {popup === false ? (
        <div>
          <Row>
            <Col>
              <h4>Ads</h4>
            </Col>
            <Col xs={2}>
              <Button
                variant="dark"
                onClick={() => {
                  setPopup(!popup);
                }}
              >
                Create
              </Button>
            </Col>
          </Row>
          <Table striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Date</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ads?.map((ad, index) => {
                return (
                  <Link href={`/ads/${ad._id}`} key={index}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{ad.title}</td>
                      <td>{ad.createdAt?.slice(0, 10)}</td>
                      <td>{ad.description}</td>
                    </tr>
                  </Link>
                );
              })}
            </tbody>
          </Table>
          {/* <Pagination /> */}
          <Row>
            <Col md={{ span: 2, offset: 5 }}>
              <Pagination size="sm">{items}</Pagination>
            </Col>
          </Row>
        </div>
      ) : (
        <div>
          <Row>
            <Col>
              <h4>Ads</h4>
            </Col>
            <Col xs={2}>
              <Button
                variant="dark"
                onClick={() => {
                  setPopup(!popup);
                }}
              >
                <XSquareFill />
              </Button>
            </Col>
          </Row>
          {image === false ? (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-2" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  {...register("title")}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  {...register("description")}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicFile">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Link"
                  {...register("link")}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="formBasicFile"
                style={{ display: "none" }}
              >
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Link"
                  value="image"
                  {...register("image")}
                />
              </Form.Group>
              <div className="d-grid mt-3">
                <Button type="submit" variant="dark">
                  Next
                </Button>
              </div>
            </Form>
          ) : (
            <Form onSubmit={handleSubmit(onRegister)}>
              <Form.Group className="mb-2" controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Image"
                  {...register("image")}
                />
              </Form.Group>
              <div className="d-grid">
                <Button type="submit" variant="dark">
                  Add
                </Button>
              </div>
            </Form>
          )}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { ...state, ads: state.ads, ad: state.ad, dashboard: state.dashboard };
};
export default connect(mapStateToProps)(Advertisements);
