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
