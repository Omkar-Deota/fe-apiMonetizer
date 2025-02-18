import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CustomBreadcrumbs from '../../components/common/CustomBreadCrumb';
import SearchSection from '../../components/common/SearchSection';
import UserManagementTable from '../../components/table/UserManagementTable';
import {
  UserManagementColumn,
  UserManagementOptions
} from '../../utils/constants';
import CustomGreeting from '../../components/common/CustomGreeting';
import useUserApi from '../../hooks/api/useUserApi';
import { IUserManagement } from './userManagement.type';
import { Spinner } from '@heroui/react';

const UserManagement: React.FC = () => {
  const { getAllUsers } = useUserApi();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<Set<string>>(new Set());
  const [userData, setUserData] = useState<IUserManagement[]>([]);
  const [userDataLoader, setUserDataLoader] = useState<boolean>(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleUserFilter = (selectedOption: Set<string>) => {
    setSelectedFilter(selectedOption);
  };

  const fetchUser = useCallback(async () => {
    setUserDataLoader(true);
    const { response, success } = await getAllUsers<IUserManagement[]>({});

    if (!success) {
      return;
    }

    setUserData(response);
    setUserDataLoader(false);
  }, [getAllUsers]);

  const filteredData = useMemo(() => {
    return userData.filter((user) => {
      const matchesSearch = searchTerm
        ? user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesFilter =
        selectedFilter.size === 0 || selectedFilter.has(user.userStatus);

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter, userData]);

  const renderUserData = () => {
    if (userData.length === 0)
      return (
        <p className="text-2xl text-center font-medium text-dark-gray">
          No Users Found
        </p>
      );

    return (
      <UserManagementTable
        tableRows={filteredData}
        tableColumns={UserManagementColumn}
        nextClick={() => {}}
        showPagination={!!filteredData.length}
        totalCount={filteredData.length}
      />
    );
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="flex flex-col gap-6">
      <CustomBreadcrumbs items="User Management" />
      <CustomGreeting />

      <SearchSection
        placeHolder="Search user..."
        value={searchTerm}
        handleSearch={handleSearch}
        onFilterChange={handleUserFilter}
        filterOption={UserManagementOptions}
      />

      {userDataLoader ? <Spinner size="lg" /> : renderUserData()}
    </div>
  );
};

export default UserManagement;
