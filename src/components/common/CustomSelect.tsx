import React, { useState } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Checkbox
} from "@heroui/react'";
import { FilterIcon } from '../../assets/icons';
import { ICustomSelect } from './common.type';

export const CustomSelect: React.FC<ICustomSelect> = ({
  options,
  onFilterChange
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSelection = (name: string) => {
    // Update the selected filters state
    const updatedFilters = selectedFilters.includes(name)
      ? selectedFilters.filter((filter) => filter !== name)
      : [...selectedFilters, name];
    setSelectedFilters(updatedFilters);

    // Trigger the onFilterChange callback with the updated filters
    if (onFilterChange) {
      onFilterChange(new Set(updatedFilters));
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="flex items-center cursor-pointer p-3">
          <FilterIcon />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Filter Options"
        closeOnSelect={false}
        variant="flat"
      >
        {options.map((item) => (
          <DropdownItem key={item.label}>
            <Checkbox
              isSelected={selectedFilters.includes(item.value)}
              className="cursor-pointer"
              onChange={() => {
                handleSelection(item.value);
              }}
            >
              {item.label}
            </Checkbox>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
