import { CardProps } from '@heroui/react';
import { IUserFilter } from '../../pages/userManagement/userManagement.type';

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

export interface ISearchSectionProp {
  placeHolder: string;
  value: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterOption?: IUserFilter[];
  onFilterChange?: (selectedFilters: Set<string>) => void;
}

export interface ICustomDropDown {
  Icon?: string;
  children: React.ReactNode;
  className?: string;
}
