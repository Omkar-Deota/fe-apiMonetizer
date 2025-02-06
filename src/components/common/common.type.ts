import { CardProps } from '@heroui/react';

export interface IBreadCrumb {
  items: string;
}
export interface ICustomSelect {
  options: {
    label: string;
    value: string;
  }[];
  onFilterChange?: (selectedFilters: Set<string>) => void;
}

export interface CustomCardProps
  extends Omit<CardProps, 'isHoverable' | 'shadow'> {
  className?: string;
}
export interface CustomButtonProps {
  color?: 'primary' | 'secondary';
  fontSize?: 'base';
  radius?: 'full' | 'none' | 'md';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface ICustomSearchProps {
  className?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
