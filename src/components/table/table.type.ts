import { IUserManagement } from '../../pages/userManagement/userManagement.type';

type ColorT =
  | 'success'
  | 'default'
  | 'primary'
  | 'warning'
  | 'danger'
  | undefined;

export type { ColorT };

export interface TableColumns {
  uid: string;
  name: string;
  sortable?: boolean;
}

export interface ITableProps {
  tableRows: IUserManagement[];
  tableColumns: TableColumns[];
  totalCount?: number;
  nextClick: () => void;
  showPagination?: boolean;
}
