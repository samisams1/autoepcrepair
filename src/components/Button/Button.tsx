import React from 'react';
import './Button.css';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button className={`button ${disabled ? 'disabled' : ''}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;