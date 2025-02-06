import { Button } from "@heroui/react'";
import React from 'react';
import clsx from 'clsx';
import { CustomButtonProps } from './type';

const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  children,
  onClick,
  ...props
}) => {
  const classes = clsx(className);

  return (
    <Button className={classes} onPress={onClick} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
