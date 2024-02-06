import React from "react";
import buttonStyle from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div>
      <button className={buttonStyle.item} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
