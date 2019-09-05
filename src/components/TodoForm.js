import React from "react";
import PropTypes from "prop-types";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  onSubmit = e => {
    let { text } = this.state;
    e.preventDefault();
    this.props.addTodo(text);
    this.setState({ text: "" });
  };

  onChangeHandle = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    let { text } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add task: </label>
        <input
          type="text"
          placeholder="task name.."
          onChange={this.onChangeHandle}
          value={text}
        />
        <input type="submit" value="add" />
      </form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
