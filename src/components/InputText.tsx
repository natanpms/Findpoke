import React from "react";

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
};

export default function InputText({
  placeholder = "Digite o nome do seu pokemon fav...",
  ...rest
}: InputTextProps) {
  return <input placeholder={placeholder} type="text" {...rest} />;
}
