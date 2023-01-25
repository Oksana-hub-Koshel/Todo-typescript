import React, { useState } from "react";
import { ITodo } from "../../interfaces/interfaces";

const List = ({ list, id, onDeleteHandler }: ITodo) => {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(false);

  return (
    <div
      style={{
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <div className="list">
        <div
          className={active ? "list_items" : "list_items_col"}
          onClick={() => setActive(!active)}
        >
          <span className={color ? "cl_bl" : "cl_sim"}> {list}</span>
        </div>

        <button onClick={() => onDeleteHandler(id)}>Delete</button>
        <button onClick={() => setColor(!color)}>Important</button>
      </div>
    </div>
  );
};

export default List;
