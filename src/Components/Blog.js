import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Form,
  InputGroup,
} from "react-bootstrap";
import { connect } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus } from "react-bootstrap-icons";
const Blog = (props) => {
  const [popup, setPopup] = useState(false);
  const [para, setPara] = useState(1);
  const { user, blogs } = props;
  const dummy = [...Array(para).keys()];
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <div className="appointments">
        <Row>
          <Col>
            <h4>Blog</h4>
          </Col>
          <Col xs={2}>
            <Button variant="dark" onClick={() => setPopup(!popup)}>
              Create
            </Button>
          </Col>
        </Row>
        <Row>
          {popup ? (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user?.user?.name}
                  disabled
                />
              </Form.Group>
              <Form.Group controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  {...register("title")}
                />
              </Form.Group>
              <div className="mt-3">
                <Form.Label className="d-flex justify-content-between">
                  Description
                  <Button
                    variant="dark"
                    size="sm"
                    onClick={() => setPara(para + 1)}
                  >
                    <Plus />
                  </Button>
                </Form.Label>
                {dummy?.map((i) => {
                  return (
                    <>
                      <Form.Group className="mt-3">
                        <Form.Control
                          as="textarea"
                          placeholder={`Paragraph ${i + 1}`}
                          {...register("[...description]")}
                        />
                      </Form.Group>
                    </>
                  );
                })}
              </div>
              <div className="d-grid">
                <Button variant="dark" type="submit">
                  POST
                </Button>
              </div>
            </Form>
          ) : (
            <Table striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {blogs?.map((blog, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{blog?.title}</td>
                      <td>{blog?.updatedAt?.slice(0, 10)}</td>
                      <td>{blog?.author?.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </Row>
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
    blogs: state.blogs,
    user: state.user,
  };
};
export default connect(mapStateToProps)(Blog);
