import React from "react";
import { InputEvent } from "../../types/types";

interface inputProps {
  inputProps: {};
  onChange: (e: InputEvent) => void;
  value: string;
}

const Input = ({ inputProps, onChange, value }: inputProps) => {
  return (
    <input
      {...inputProps}
      onChange={onChange}
      value={value}
      className="pl-2 font-light h-8 border-b-2"
    />
  );
};

export default Input;
