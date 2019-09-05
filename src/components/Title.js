import React from "react";
import style from "./Title.css";
import PropTypes from "prop-types";

const Title = props => (
  <div>
    <h1 className={style.title}>{props.title}</h1>
    <h2 className={style.titleItem}>Number of tasks: {props.numberOfTasks}</h2>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfTasks: PropTypes.number.isRequired
};

export default Title;
