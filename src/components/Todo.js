import React from "react";
import PropTypes from "prop-types";

const Todo = props => {
  const remove = () => props.remove(props.data.id);
  return <div onClick={remove}>{props.data.text}</div>;
};

Todo.propTypes = {
  remove: PropTypes.func.isRequired
};

export default Todo;
