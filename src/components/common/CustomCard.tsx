import React from 'react';
import clsx from 'clsx';

import { CustomCardProps } from './type';
import { Card, CardBody } from '@heroui/react';

export const CustomCard: React.FC<CustomCardProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <Card className={clsx('rounded-lg shadow-lg', className)} {...props}>
      <CardBody>{children}</CardBody>
    </Card>
  );
};
