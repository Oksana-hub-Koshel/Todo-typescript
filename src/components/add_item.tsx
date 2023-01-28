import React, { useState } from "react";
import Item from "./../App";

export interface Item {
  addItem: (text: string, setValue: any) => void;
}

const AddItem = ({ addItem }: Item) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        placeholder="type here"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        style={{
          color: "black",
          marginTop: 20,
          width: 100,
          height: 20,
        }}
        onClick={() => addItem(value, setValue)}
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
