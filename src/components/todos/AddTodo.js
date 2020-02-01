import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class AddTodo extends Component {
  state = {
    title: ""
  };

  formStyle = () => {
    return { 
        margin: "10px"
    };
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={this.formStyle()}>
        <Form.Input
          placeholder="Add todo..."
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          style={{flex: "10", paddingRight: "10px"}}
        />
        <Form.Button content="Add" />
      </Form>
    );
  }
}

export default AddTodo;
