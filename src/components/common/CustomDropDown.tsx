import { Dropdown, DropdownTrigger, DropdownMenu } from '@heroui/react';
import { ICustomDropDown } from './common.type';

const CustomDropDown: React.FC<ICustomDropDown> = ({
  children,
  Icon = '',
  className = ''
}) => {
  return (
    <Dropdown
      className={`absolute right-0 outline-none ${className}`}
      closeOnSelect={true}
    >
      <DropdownTrigger>
        <span className="flex justify-center items-center z-0 h-6 w-6">
          <Icon />
        </span>
      </DropdownTrigger>
      {/*@ts-expect-error nextui drowpdownitem type error */}
      <DropdownMenu aria-label="Static Actions">{children}</DropdownMenu>
    </Dropdown>
  );
};

export default CustomDropDown;
