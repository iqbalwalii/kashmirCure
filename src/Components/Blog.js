import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import CreateBlog from "./createBlog";
import Link from "next/link";
import { Pagination } from "react-bootstrap";
import { getBlogs } from "../services/BlogService";
const Blog = (props) => {
  const [popup, setPopup] = useState(false);
  const { blogs, dashboard, button } = props;
  console.log(props);
  let active = 1;
  let items = [];
  const pages = Math.ceil(dashboard?.total_posts / 10);
  const handleRequest = (num) => {
    getBlogs(num).then((res) => {
      active = num;
      props.dispatch({
        type: "GET_BLOGS",
        payload: res.data.posts,
      });
    });
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
  useEffect(() => {
    getBlogs().then((res) => {
      props.dispatch({
        type: "GET_BLOGS",
        payload: res.data.posts,
      });
    });
  }, []);
  return (
    <Container>
      <div className="appointments">
        <Row>
          <Col>
            <h4>Blog</h4>
          </Col>
          <Col xs={2}>
            <Button
              variant="dark"
              onClick={() =>
                props.dispatch({
                  type: "SET_BLOG_BUTTON",
                  payload: !button,
                })
              }
            >
              Create
            </Button>
          </Col>
        </Row>
        <Row>
          {button ? (
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
          <Row>
            <Col md={{ span: 2, offset: 5 }}>
              <Pagination size="sm">{items}</Pagination>
            </Col>
          </Row>
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
    dashboard: state.dashboard,
    button: state.button,
  };
};
export default connect(mapStateToProps)(Blog);
