import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  small?: boolean;
  large?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string | number;
};

const Button: React.FC<ButtonProps> = ({
  children,
  small,
  large,
  disabled,
  className,
  onClick,
}) => {
  return (
    <button
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
