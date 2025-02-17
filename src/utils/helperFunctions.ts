import { ColorT } from '../components/table/table.type';

export const isObjectEmpty = (obj: unknown): boolean => {
  return (
    obj === null ||
    (typeof obj === 'object' && Object.keys(obj || {}).length === 0)
  );
};

const statusToColor: Record<string, ColorT> = {
  active: 'success',
  inactive: 'danger',
  success: 'success',
  fail: 'danger'
};

export const getColor = (status: string): ColorT =>
  statusToColor[status] ?? 'default';

export const formatTabName = (pathName: string) => {
  let currentTab = pathName.split('/')[2].replace('-', ' ');

  currentTab = currentTab.charAt(0).toUpperCase() + currentTab.slice(1);

  return currentTab;
};

export const formatName = (firstName: string, lastName: string) => {
  let formattedName = firstName + ' ' + lastName;

  formattedName =
    formattedName.length > 10
      ? formattedName.slice(0, 10) + '...'
      : formattedName;

  return formattedName;
};
