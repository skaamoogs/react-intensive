import React from "react";
import buttonStyle from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={buttonStyle.item} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
