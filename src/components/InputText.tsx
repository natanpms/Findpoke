import React from "react";

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
};

export default function InputText({
  placeholder = "Digite o nome do seu pokemon fav...",
  ...rest
}: InputTextProps) {
  return (
    <input
      placeholder={placeholder}
      className="bg-white p-2 rounded-xl md:w-1/2 w-full"
      type="text"
      {...rest}
    />
  );
}
