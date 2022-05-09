import { useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Side from "../../Components/Navigator";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { getBlog, deleteBlog } from "../../services/BlogService";
import Image from "next/image";
const Appointment = (props) => {
  const router = useRouter();
  const id = router.query.id;
  const { blog } = props;
  console.log(blog);
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
  const onClickHandler = () => {
    deleteBlog(id).then((res) => {
      props.dispatch({
        type: "SET_ACTIVE_TAB",
        payload: "dashboard",
      });
      router.push("/dashboard");
    });
  };
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
                  <Button variant="primary" className="mx-3" onClick={() => {}}>
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
