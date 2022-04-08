import { useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { getBlog } from "../../services/BlogService";
const Appointment = (props) => {
  const router = useRouter();
  const id = router.query.id;
  const { blog } = props;
  useEffect(() => {
    if (router.isReady) {
      getBlog(id).then((res) => {
        props.dispatch({
          type: "SET_BLOG",
          payload: res.data,
        });
      });
    }
  }, [router, id, props]);
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={11}>
          <h1>
            <Link href="/dashboard">
              <a style={{ color: "blue", textDecoration: "none" }}>Kiadah</a>
            </Link>
          </h1>
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
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    blog: state.blog,
  };
};
export default connect(mapStateToProps)(Appointment);
