import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { hot } from "react-hot-loader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  addTodo = val => {
    const todo = {
      text: val || "empty task...",
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  };

  removeTodo = id => {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  };

  render() {
    let { length } = this.state.data;
    return (
      <div className={style.TodoApp}>
        <Title title="Todo React Application" numberOfTasks={length} />
        <TodoForm addTodo={this.addTodo} />
        <TodoList items={this.state.data} remove={this.removeTodo} />
      </div>
    );
  }
}

export default hot(module)(App);
