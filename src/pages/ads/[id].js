import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Card,
  Col,
  Table,
  Button,
  Form,
} from "react-bootstrap";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { deleteAd, getAd, updateAd, postAd } from "../../services/AdService";
import { useRouter } from "next/router";
import Nav from "../../Components/Navigator";
const Ad = (props) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const id = router.query.id;
  const [popup, setPopup] = useState(false);
  const [image, setImage] = useState(false);
  const onSubmit = (data) => {
    updateAd(id, data).then((res) => {
      props.dispatch({
        type: "SET_AD",
        payload: res.data.ad,
      });
      setImage(true);
      setPopup(false);
    });
  };
  const onDeleteHandler = () => {
    deleteAd(id).then((res) => {
      router.push("/dashboard");
      props.dispatch({ type: "SET_TAB", payload: "ads" });
    });
  };
  const onRegister = (data) => {
    postAd(id, data.image[0]).then((res) => {
      router.push("/");
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
      {popup === false && image === false ? (
        <Col xs={10} className="mt-3">
          <Row></Row>
          <Card style={{ width: "40%" }}>
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
              <Button
                variant="primary"
                className="mx-3"
                onClick={() => {
                  setPopup(true);
                }}
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <Col xs={10} className="mt-3">
          <Row></Row>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder={ad?.title}
                {...register("title")}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder={ad?.description}
                {...register("description")}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicFile">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                placeholder={ad?.link}
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
              <Button
                variant="primary"
                className="my-1"
                onClick={() => {
                  setPopup(false);
                  setImage(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Col>
      )}
      {image === true && (
        <Col xs={{ offset: 2, span: 9 }}>
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
        </Col>
      )}
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    ad: state.ad,
    tab: state.tab,
  };
};
export default connect(mapStateToProps)(Ad);
