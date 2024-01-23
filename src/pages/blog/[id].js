import { useEffect, useState } from "react";
import { Row, Col, Table, Button, Form } from "react-bootstrap";
import Side from "../../Components/Navigator";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { getBlog, deleteBlog, updateBlog } from "../../services/BlogService";
import Image from "next/image";
import { useForm } from "react-hook-form";
const Appointment = (props) => {
  const router = useRouter();
  const id = router.query.id;
  const { blog } = props;
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    if (router.isReady) {
      getBlog(id).then((res) => {
        props.dispatch({
          type: "SET_BLOG",
          payload: res.data,
        });
      });
    }
  }, [router, id]);
  const [edit, setEdit] = useState(false);
  const onClickHandler = () => {
    deleteBlog(id).then((res) => {
      props.dispatch({
        type: "SET_ACTIVE_TAB",
        payload: "dashboard",
      });
      router.push("/dashboard");
    });
  };

  function onSubmit(data) {
    const img = data.image[0];
    updateBlog(id, data).then((res) => {});
  }
  return (
    <>
      <Row>
        <Col xs={2}>
          <Side />
        </Col>
        {edit != true ? (
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
                  <td>Title</td>
                  <td>{blog?.doctor.title}</td>
                </tr>
                {blog?.doctor.description.map((desc, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        Description <i>para{index + 1}</i>
                      </td>
                      <td>{desc}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td>Author</td>
                  <td>{blog?.doctor?.author?.name}</td>
                </tr>
                <tr>
                  <td>Action</td>
                  <td>
                    <Button variant="danger" onClick={onClickHandler}>
                      Delete
                    </Button>
                    <Button
                      variant="primary"
                      className="mx-3"
                      onClick={() => setEdit(true)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/files/${blog?.doctor.bannerImage}`}
              width="460px"
              height="320px"
              alt="blog image"
            />
          </Col>
        ) : (
          <Col xs={9} className="mt-3">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder={blog?.doctor.title}
                  {...register("title")}
                />
              </Form.Group>
              <Form.Group controlId="link" className="mt-2">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" {...register("image")} />
              </Form.Group>
              <Form.Group controlId="description" className="mt-2">
                <Form.Label>Description</Form.Label>
                {blog?.doctor?.description.map((input, i) => {
                  return (
                    <textarea
                      className="textarea"
                      placeholder={input}
                      key={i}
                      id={i}
                      {...register(`description[[${i}]`)}
                    />
                  );
                })}
              </Form.Group>
              <div className="d-grid mt-5">
                <Button
                  type="submit"
                  variant="success"
                  // onClick={this.onSubmitHandler}
                >
                  update
                </Button>
              </div>
            </Form>
          </Col>
        )}
      </Row>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    blog: state.blog,
    tab: state.tab,
  };
};
export default connect(mapStateToProps)(Appointment);
