import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { useState } from "react";
import CreateBlog from "./createBlog";
import Link from "next/link";
const Blog = (props) => {
  const [popup, setPopup] = useState(false);
  const { blogs } = props;
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
            <CreateBlog />
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
                    <Link href={`blog/${blog._id}`}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{blog?.title}</td>
                        <td>{blog?.updatedAt?.slice(0, 10)}</td>
                        <td>{blog?.author?.name}</td>
                      </tr>
                    </Link>
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
