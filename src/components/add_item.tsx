import React, { useState } from "react";
import Item from "./../App";
import { useAppDispatch } from "../hooks/redux";
import { addNewTodo } from "../redux/reducers/todoSlice";

const AddItem = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const onAddHandler = () => {
    dispatch(addNewTodo(value));
    setValue("");
  };
  return (
    <div>
      <input
        placeholder="type here"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        style={{
          border: "solid grey",
          marginRight: 10,
          padding: 5,
          marginBottom: 40,
        }}
      />
      <button
        style={{
          color: "black",
          marginTop: 20,
          width: 100,
          height: 20,
        }}
        onClick={onAddHandler}
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
