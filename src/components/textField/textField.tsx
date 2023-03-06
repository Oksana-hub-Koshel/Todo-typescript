import React from "react";
import { InputEvent } from "../../types/types";

interface TextProps {
  label: string;
  inputProps: { type: string; placeholder: string };
  onChange: (e: InputEvent) => void;
  value: string;
}

const TextField = ({ label, inputProps, onChange, value }: TextProps) => {
  return (
    <div className="flex flex-col w-5/12 mt-4 ml-0 mr-0">
      <label className="mb-2 text-base text-gray-600">{label}</label>
      <input
        className="bg-gray-200 py-2 border-2 outline-none px-2"
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
