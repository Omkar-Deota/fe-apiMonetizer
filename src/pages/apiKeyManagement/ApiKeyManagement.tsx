import React, { useMemo, useState } from 'react';
import CustomBreadcrumbs from '../../components/common/CustomBreadCrumb';
import CustomGreeting from '../../components/common/CustomGreeting';
import SearchSection from '../../components/common/SearchSection';
import {
  ApiManagementColumn,
  ApiManagementData,
  ApiManagementOptions
} from '../../utils/constants';
import ApiManagementTable from '../../components/table/ApiManagementTable';

const ApiKeyManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<Set<string>>(new Set());

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleApiFilter = (selectedOption: Set<string>) => {
    setSelectedFilter(selectedOption);
  };

  const filteredData = useMemo(() => {
    return ApiManagementData.filter((api) => {
      const matchesSearch = searchTerm
        ? api.apiDescription.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesFilter =
        selectedFilter.size === 0 || selectedFilter.has(api.status);

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);

  return (
    <div className="flex flex-col gap-6">
      <CustomBreadcrumbs items="Api Management" />
      <CustomGreeting />

      <SearchSection
        placeHolder="Search api key..."
        handleSearch={handleSearch}
        value={searchTerm}
        onFilterChange={handleApiFilter}
        filterOption={ApiManagementOptions}
      />

      <ApiManagementTable
        tableRows={filteredData}
        tableColumns={ApiManagementColumn}
        nextClick={() => {}}
        showPagination={!!filteredData.length}
        totalCount={filteredData.length}
      />
    </div>
  );
};

export default ApiKeyManagement;
