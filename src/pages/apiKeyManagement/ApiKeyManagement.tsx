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
import CustomButton from '../../components/common/CustomButton';
import { AddIcon } from '../../assets/icons';
import { AddApiModal } from '../../components/modal/AddApiModal';
import { useAppContext } from '../../context/AppContextProvider';
import { USER_ROLES } from '../../utils/enum';

const ApiKeyManagement: React.FC = () => {
  const { userData } = useAppContext();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<Set<string>>(new Set());
  const [showApiAddModal, setShowApiAddModal] = useState<boolean>(false);

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

  const handleAddApiModal = () => {
    setShowApiAddModal(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <CustomBreadcrumbs items="Api Management" />
      <CustomGreeting />

      <div className="flex flex-col gap-6 items-end">
        {userData?.role === USER_ROLES.USER && (
          <CustomButton color="primary" onClick={handleAddApiModal}>
            <AddIcon /> New Api Key
          </CustomButton>
        )}

        <SearchSection
          placeHolder="Search api key..."
          handleSearch={handleSearch}
          value={searchTerm}
          onFilterChange={handleApiFilter}
          filterOption={ApiManagementOptions}
        />
      </div>

      <ApiManagementTable
        tableRows={filteredData}
        tableColumns={ApiManagementColumn}
        nextClick={() => {}}
        showPagination={!!filteredData.length}
        totalCount={filteredData.length}
      />

      {showApiAddModal && (
        <AddApiModal
          isOpen={showApiAddModal}
          onClose={() => setShowApiAddModal(false)}
        />
      )}
    </div>
  );
};

export default ApiKeyManagement;
