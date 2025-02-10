import React, { useState } from 'react';
import { CustomSearch } from '../../components/common/CustomSearch';
import { ISearchSectionProp } from './common.type';
import { AddIcon, FilterIcon } from '../../assets/icons';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Checkbox
} from '@heroui/react';

const SearchSection: React.FC<ISearchSectionProp> = ({
  placeHolder,
  value,
  handleSearch,
  onFilterChange,
  filterOption
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSelection = (name: string) => {
    if (!onFilterChange) return;
    const updatedFilters = selectedFilters.includes(name)
      ? selectedFilters.filter((filter) => filter !== name)
      : [...selectedFilters, name];
    setSelectedFilters(updatedFilters);
    onFilterChange(new Set(updatedFilters));
  };

  const renderFunctions = () => {
    if (onFilterChange && filterOption)
      return (
        <Dropdown placement="bottom-start" closeOnSelect={false}>
          <DropdownTrigger>
            <div className="flex items-center cursor-pointer p-3 ">
              {selectedFilters.length > 0 ? <AddIcon /> : <FilterIcon />}
            </div>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Filter Options"
            className="overflow-y-auto max-h-44"
          >
            {filterOption.map((option) => (
              <DropdownItem
                key={option.value}
                onPress={() => handleSelection(option.value)}
              >
                <div className="flex items-center gap-2 pointer-events-none">
                  <Checkbox isSelected={selectedFilters.includes(option.value)}>
                    {option.label}
                  </Checkbox>
                </div>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      );
  };

  return (
    <div className="bg-off-white w-full rounded-xl h-16 items-center flex p-2 justify-between mt-2">
      <CustomSearch
        placeholder={placeHolder}
        value={value}
        onChange={handleSearch}
        className="cursor-pointer"
      />

      {renderFunctions()}
    </div>
  );
};

export default SearchSection;
