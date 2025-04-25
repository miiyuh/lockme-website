// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#648b83] hover:bg-[#4e746e] text-[#1a1a1a] font-bold px-6 py-3 rounded-2xl text-base ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
