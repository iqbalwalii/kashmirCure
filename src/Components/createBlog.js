import React from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import Axios from "axios";
import Router, { withRouter } from "next/router";
class App extends React.Component {
  state = {
    title: "",
    description: [""],
    author_id: this.props?.user?.user?._id,
  };

  handleChange = (e) => {
    e.persist();

    const newInputs = [...this.state.description];

    newInputs[e.target.id] = e.target.value;

    if (e.target.value && newInputs.every((input) => input.length)) {
      newInputs.push("");
    }

    this.setState(() => ({
      description: newInputs,
    }));
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    const FORMDATA = new FormData();
    FORMDATA.append("adImage", this.state.bannerImage);
    try {
      Axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        author_id: this.state.author_id,
        title: this.state.title,
        description: this.state.description.filter(Boolean),
      })
        .then((res) => res)
        .then((result) => {
          const { data } = result;
          if (data.status === "success") {
            Axios.put(
              `${process.env.NEXT_PUBLIC_API_URL}/blog/upload/image/${data.data.post._id}`,
              FORMDATA,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
              .then((res) => res)
              .then((result) => {
                Router.push({
                  pathname: "/dashboard",
                });
                this.props.dispatch({
                  type: "SET_BLOG_BUTTON",
                  payload: false,
                });
              })
              .catch((err) => console.log("image upload err", err));
          }
        })
        .catch((err) => console.log("err", err));
    } catch (error) {
      console.log("post catch error");
    }
  };

  render() {
    const { description } = this.state;

    return (
      <div>
        <Form onChange={this.handleChange} onSubmit={(e) => e.preventDefault()}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="Title of the blog"
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="link" className="mt-2">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                this.setState({
                  bannerImage: e.target.files[0],
                });
              }}
            />
          </Form.Group>
          <Form.Group controlId="description" className="mt-2">
            <Form.Label>Description</Form.Label>
            {description.map((input, i) => {
              return (
                <textarea
                  className="textarea"
                  placeholder="Enter the description "
                  key={i}
                  id={i}
                  value={input}
                  onChange={(e) =>
                    this.setState({
                      description: e.target.value,
                    })
                  }
                />
              );
            })}
          </Form.Group>
          <div className="d-grid mt-5">
            <Button variant="dark" onClick={this.onSubmitHandler}>
              continue
            </Button>

            <Button
              variant="primary"
              className="mt-2"
              onClick={() => this.setState({ description: [""] })}
            >
              Clear
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    tab: state.tab,
    button: state.button,
  };
};
export default connect(mapStateToProps)(App);
