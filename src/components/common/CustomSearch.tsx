import { Input } from "@heroui/react'";
import { ICustomSearchProps } from './type';
import { SearchIcon } from '../../assets/icons';

export const CustomSearch: React.FC<ICustomSearchProps> = ({
  className,
  placeholder,
  value,
  onChange
}) => {
  return (
    <Input
      classNames={{
        base: 'w-1/2 h-10',
        mainWrapper: 'h-full',
        input: 'text-small',
        inputWrapper:
          'h-full font-normal text-default-500 bg-off-white border-1 border-light-gray/10 rounded-xl'
      }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      size="sm"
      startContent={<SearchIcon />}
      type="search"
      className={className}
    />
  );
};
