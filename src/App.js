import React, { Component } from "react";
import "./App.css";
import Todos from "./components/todos/Todos";
import axios from "axios";
import AddTodo from "./components/todos/AddTodo";
import uuid from "uuid";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuid.v4();
        this.setState({
          todos: [...this.state.todos, res.data]
        });
      });
  };

  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  toggleComplete={this.toggleComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </Router>
      </div>
    );
  }
}

export default App;
