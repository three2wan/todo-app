import React, { Component } from "react";
import { Checkbox, List, Button } from "semantic-ui-react";

class TodoItem extends Component {
  listStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      margin: "auto",
      borderBottom: "1px #ccc dotted"
    };
  };

  checkboxStyle = () => {
    return {
      marginRight: "15px",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  checkboxChecked = () => {
    return this.props.todo.completed ? true : false;
  };

  render() {
    const { title, id } = this.props.todo;
    return (
      <List style={this.listStyle()}>
        <List.Item>
          <Checkbox
            toggle
            onChange={this.props.toggleComplete.bind(this, id)}
            checked={this.checkboxChecked()}
            style={this.checkboxStyle()}
            label={title}
          />
          <Button
            circular
            onClick={this.props.delTodo.bind(this, id)}
            icon="delete"
            style={btnDelStyle}
            inverted
            color="red"
          />
        </List.Item>
      </List>
    );
  }
}

const btnDelStyle = {
  float: "right"
};

export default TodoItem;
