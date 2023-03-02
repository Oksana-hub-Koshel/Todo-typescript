import React from "react";

interface TextProps {
  label: string;
  inputProps: {};
  onChange: () => void;
}

const TextField = ({ label, inputProps, onChange }: TextProps) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};

export default TextField;
