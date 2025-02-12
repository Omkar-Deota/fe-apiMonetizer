import React, { useMemo, useState } from 'react';
import CustomBreadcrumbs from '../../components/common/CustomBreadCrumb';
import SearchSection from '../../components/common/SearchSection';
import UserManagementTable from '../../components/table/UserManagementTable';
import {
  UserManagementColumn,
  UserManagementData,
  UserManagementOptions
} from '../../utils/constants';
import useUserApi from '../../hooks/api/useUserApi';

const UserManagement: React.FC = () => {
  const { getAllUsers } = useUserApi();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<Set<string>>(new Set());

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleUserFilter = (selectedOption: Set<string>) => {
    setSelectedFilter(selectedOption);
  };

  console.log(getAllUsers({}), 'res');

  const filteredData = useMemo(() => {
    return UserManagementData.filter((user) => {
      const matchesSearch = searchTerm
        ? user.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesFilter =
        selectedFilter.size === 0 || selectedFilter.has(user.status);

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);

  return (
    <div className="flex flex-col gap-6">
      <CustomBreadcrumbs items="User Management" />

      <h1 className="text-2xl font-semibold md:block hidden">
        User Management
      </h1>

      <SearchSection
        placeHolder="Search user..."
        value={searchTerm}
        handleSearch={handleSearch}
        onFilterChange={handleUserFilter}
        filterOption={UserManagementOptions}
      />

      <UserManagementTable
        tableRows={filteredData}
        tableColumns={UserManagementColumn}
        nextClick={() => {}}
        showPagination={!!filteredData.length}
        totalCount={filteredData.length}
      />
    </div>
  );
};

export default UserManagement;
