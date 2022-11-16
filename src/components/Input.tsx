import React from "react";

type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: InputProps) => {
  return (
    <div>
      <input type="text" value={value} onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default Input;
