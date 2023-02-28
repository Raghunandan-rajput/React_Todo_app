import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

function ListItem({ item }) {

  const {deleteTodo,editTodo}=useContext(GlobalContext)

  return (
    <li className="list-group-item custom-padding">
      {item.text}
      <button
        className="btn btn-danger btn-sm float-end"
        onClick={() => deleteTodo(item.id)}
      >
        Delete
      </button>
      <button
        className="btn btn-warning btn-sm float-end"
        onClick={() => editTodo(item)}
      >
        Update
      </button>
    </li>
  );
}


export default ListItem;
