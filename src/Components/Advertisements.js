import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAds, createAd, postAd } from "../services/AdService";
import { Table, Row, Col, Button, Form } from "react-bootstrap";
import { XSquareFill } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
const Advertisements = (props) => {
  const { ads, ad } = props;
  const router = useRouter();
  const [popup, setPopup] = useState(false);
  const [image, setImage] = useState(false);
  const { register, handleSubmit } = useForm();
  console.log(ad?._id);
  const onSubmit = (data) => {
    console.log(data);
    createAd(data)
      .then((res) => {
        console.log(res);
        props.dispatch({
          type: "SET_AD",
          payload: res.data.ad,
        });
        setImage(true);
      })
      .catch((err) => console.log(err));
  };
  const onRegister = (data) => {
    console.log(ad?._id, data.image[0]);
    postAd(ad?._id, data.image[0]).then((res) => {
      Router.push("/");
    });
  };
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
  return { ...state, ads: state.ads, ad: state.ad };
};
export default connect(mapStateToProps)(Advertisements);
