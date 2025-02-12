import React, { useMemo, useState } from 'react';
import CustomBreadcrumbs from '../../components/common/CustomBreadCrumb';
import SearchSection from '../../components/common/SearchSection';
import {
  MonitoringLogsColumn,
  MonitoringLogsData,
  UserManagementOptions
} from '../../utils/constants';
import MonitoringLogsTable from '../../components/table/MonitoringLogsTable';

const MonitoringLogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<Set<string>>(new Set());

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleUserFilter = (selectedOption: Set<string>) => {
    setSelectedFilter(selectedOption);
  };

  const filteredData = useMemo(() => {
    return MonitoringLogsData.filter((user) => {
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
      <CustomBreadcrumbs items="Monitoring Logs" />

      <h1 className="text-2xl font-semibold md:block hidden">
        Monitoring Logs
      </h1>

      <SearchSection
        placeHolder="Search user..."
        value={searchTerm}
        handleSearch={handleSearch}
        onFilterChange={handleUserFilter}
        filterOption={UserManagementOptions}
      />

      <MonitoringLogsTable
        tableRows={filteredData}
        tableColumns={MonitoringLogsColumn}
        nextClick={() => {}}
        showPagination={!!filteredData.length}
        totalCount={filteredData.length}
      />
    </div>
  );
};

export default MonitoringLogs;
