import React, { useCallback, useMemo } from 'react';
import {
  Chip,
  // DropdownItem,
  extendVariants,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  usePagination
} from '@heroui/react';
import TablePagination from './TablePagination';
// import CustomDropDown from '../common/CustomDropDown';
import { ITableProps } from './table.type';
import { IUserManagement } from '../../pages/userManagement/userManagement.type';
// import { UserManagementOptions } from '../../utils/constants';
import { getColor } from '../../utils/helperFunctions';
const TableWrapper = extendVariants(Table, {
  variants: {
    colors: {
      brand: {
        wrapper: 'bg-off-white',
        th: 'bg-off-white font-semibold text-charcoal text-base',
        td: 'font-medium text-slate-grey test-sm xl:text-base '
      }
    }
  },
  defaultVariants: {
    colors: 'brand'
  }
});

const UserManagementTable: React.FC<ITableProps> = ({
  tableRows,
  tableColumns,
  totalCount,
  nextClick,
  showPagination = true
}) => {
  const normalizedRows: IUserManagement[] = useMemo(() => {
    if (Array.isArray(tableRows)) {
      return tableRows.map((row) => {
        if ('id' in row) {
          return {
            id: row.id ?? 'unknown',
            firstName: row.firstName ?? 'unknown',
            lastName: row.lastName ?? 'unknown',
            email: row.email ?? 'unknown',
            apiKey: row.apiKey ?? 'unknown',
            apiDescription: row.apiDescription ?? 'unknown',
            usageCount: row.usageCount ?? 'unknown',
            subscriptionPlan: row.subscriptionPlan ?? 'unknown',
            userStatus: row.userStatus ?? 'unknown'
          } as IUserManagement;
        }
        return row;
      });
    }
    return [];
  }, [tableRows]);

  const total = totalCount ?? normalizedRows.length;

  const { activePage, onNext, onPrevious, setPage } = usePagination({
    total: total
  });

  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);

  const start = (activePage - 1) * rowsPerPage;
  const end = Math.min(start + rowsPerPage, total);

  const items = useMemo(() => {
    return normalizedRows.slice(start, end).map((item, index) => ({
      ...item,
      index: start + index + 1
    }));
  }, [end, start, normalizedRows]);

  const handleRowsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  };

  const renderCell = useCallback(
    (item: IUserManagement, columnKey: React.Key) => {
      const cellValue = item[columnKey as keyof IUserManagement];
      switch (columnKey) {
        case 'userName': {
          return (
            <p className="line-clamp-1">{item.firstName ?? item.lastName}</p>
          );
        }
        case 'email': {
          return <p className="line-clamp-1">{cellValue}</p>;
        }
        case 'apiKey': {
          return <p className="line-clamp-1">{cellValue}</p>;
        }
        case 'apiDescription': {
          return <p className="line-clamp-1">{cellValue}</p>;
        }
        case 'usageCount': {
          return <p>{cellValue}</p>;
        }
        case 'subscriptionPlan': {
          return <p>{cellValue}</p>;
        }
        case 'userStatus': {
          return (
            <Chip
              className="capitalize flex justify-center"
              color={getColor(item.userStatus)}
              size="md"
              variant="dot"
            >
              {item.userStatus}
            </Chip>
          );
        }

        // case 'actions':
        //   return (
        //     <CustomDropDown Icon={AddIcon} className="cursor-pointer">
        //       {UserManagementOptions.map((option) => (
        //         <DropdownItem
        //           textValue={option.label}
        //           key={option.label}
        //           onPress={() => alert(option.label)}
        //         >
        //           <p className="capitalize">
        //             {item.status === 'active' ? 'Deactivate' : 'Activate'}
        //           </p>
        //         </DropdownItem>
        //       ))}
        //     </CustomDropDown>
        //   );
      }
    },
    []
  );
  return (
    <TableWrapper
      aria-labelledby="survey-table"
      bottomContent={
        showPagination && (
          <TablePagination
            page={rowsPerPage}
            total={total}
            start={start}
            end={end}
            onNext={() => {
              onNext();
              nextClick();
            }}
            onPrevious={onPrevious}
            handlePage={handleRowsPerPage}
          />
        )
      }
      className="w-full"
    >
      <TableHeader>
        {tableColumns.map((column) => (
          <TableColumn key={column.uid} className="font-semibold text-sm">
            {column.name}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody
        items={items}
        emptyContent={<h1 className="text-center text-xl">No data present</h1>}
      >
        {(item) => (
          <TableRow
            key={item.id}
            className={`select-none text-md text-dark-gray text-sm`}
          >
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </TableWrapper>
  );
};

export default UserManagementTable;
