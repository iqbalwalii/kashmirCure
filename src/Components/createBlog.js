import React from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createPost } from "../services/BlogService";
class App extends React.Component {
  state = {
    title: "",
    description: [""],
    bannerImage: "",
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
    this.state.description.pop();
    createPost(this.state).then((res) => {
      console.log(res);
    });
  };

  render() {
    console.log(this.props);
    const { description } = this.state;

    return (
      <div>
        <Form onChange={this.handleChange} onSubmit={(e) => e.preventDefault()}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="link">
            <Form.Label>Image Link</Form.Label>
            <Form.Control
              onChange={(e) => this.setState({ bannerImage: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            {description.map((input, i) => {
              return (
                <textarea
                  className="textarea"
                  key={i}
                  id={i}
                  value={input}
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                />
              );
            })}
          </Form.Group>
          <div className="d-grid">
            <Button variant="dark" onClick={this.onSubmitHandler}>
              Submit
            </Button>

            <Button
              variant="primary"
              className="mt-1"
              onClick={() => this.setState({ inputs: [""], title: "" })}
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
  };
};
export default connect(mapStateToProps)(App);
