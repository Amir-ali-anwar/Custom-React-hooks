import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  small?: boolean;
  large?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string | number;
  type?: 'submit' | 'reset' | 'button';
};

const Button: React.FC<ButtonProps> = ({
  children,
  small,
  large,
  disabled,
  className,
  type,
  onClick,
}) => {
  return (
    <button
    type={type}
      onClick={onClick}
      className={`${className} ${small ? "btn-sm" : ""} ${
        large ? "btn-lg" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
