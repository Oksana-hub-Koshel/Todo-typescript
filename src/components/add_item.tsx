import React, { useState } from "react";
import Item from "./../App";
import { useAppDispatch } from "../hooks/redux";
import { addNewTodo } from "../redux/reducers/todoSlice";
import Input from "./input/input";
import Button from "./button/button";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const AddItem: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const onAddHandler = () => {
    dispatch(addNewTodo(value));
    setValue("");
  };

  // const onChangeInput = (e: InputEvent): void => {
  //   setValue(e.target.value);
  // };
  return (
    <div className="flex justify-center  mt-6 mb-6">
      <Input
        inputProps={{ placeholder: "Add item", type: "text" }}
        onChange={(e: InputEvent) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <Button onClick={onAddHandler}>Add item</Button>
    </div>
  );
};

export default AddItem;
