import React, { useState } from 'react';
import CustomBreadcrumbs from '../../components/common/CustomBreadCrumb';
import SearchSection from '../../components/common/SearchSection';

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="flex flex-col gap-6">
      <CustomBreadcrumbs items="User Management" />

      <h1 className="text-2xl font-semibold ">User Management</h1>

      <SearchSection
        placeHolder="Search user..."
        value={searchTerm}
        handleSearch={handleSearch}
        onFilterChange={() => {}}
        filterOption={[]}
      />

      
    </div>
  );
};

export default UserManagement;
