import React from 'react';

interface IButtonProp {
  title: string;
  className?: string;
}

const CustomButton: React.FC<IButtonProp> = ({ title, className }) => {
  return <button className={className}>{title}</button>;
};

export default CustomButton;
