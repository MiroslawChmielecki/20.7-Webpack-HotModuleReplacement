import React from "react";
import style from "./TodoList.css";
import Todo from "./Todo";
import PropTypes from "prop-types";

const TodoList = props => {
  const list = props.items.map(element => {
    return <Todo key={element.id} remove={props.remove} data={element} />;
  });
  return <div className={style.list}>{list}</div>;
};

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
};

export default TodoList;
