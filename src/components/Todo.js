import React from "react";
import style from "./Todo.css";

const Item = props => (
  <li id={props.id}>
    <button onClick={() => props.remove(props.id)}>ok!</button>
    {props.name}
  </li>
);

export default Item;
