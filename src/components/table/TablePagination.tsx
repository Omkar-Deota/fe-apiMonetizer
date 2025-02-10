import React from 'react';
import { ChevronLeft, ChevronRight } from '../../assets/icons';

interface ITablePagination {
  page: number;
  total: number;
  start: number;
  end: number;
  onNext: () => void;
  onPrevious: () => void;
  handlePage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TablePagination: React.FC<ITablePagination> = ({
  page,
  total,
  start,
  end,
  onNext,
  onPrevious,
  handlePage
}) => {
  return (
    <div className="flex items-center gap-4 mx-auto lg:ml-auto lg:mr-0">
      <span className="font-medium text-shadow-grey text-sm">
        Rows per page
      </span>
      <select
        value={page}
        onChange={handlePage}
        className="bg-cloud-grey pl-3 pr-5 py-2 rounded-lg outline-none appearance-none bg-drop-down bg-no-repeat bg-center-right cursor-pointer text-sm font-medium"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <span className="font-medium text-shadow-grey text-sm">{`${
        start + 1
      }-${end} of ${total}`}</span>
      <div className="flex items-center gap-8">
        <button
          onClick={onPrevious}
          disabled={start === 0}
          className="[&>svg]:disabled:text-cool-grey"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={onNext}
          disabled={end === total}
          className="[&>svg]:disabled:text-cool-grey"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
