"use client";
import SortProducts, { SortOptions } from "./index";

type RefinementListProps = {
  "data-testid"?: string;
  search: string;
  setSearching: (value: string) => void;
  handleSort: (value: SortOptions) => void;
};

const RefinementList = ({
  handleSort,
  "data-testid": dataTestId,
  setSearching,
  search,
}: RefinementListProps) => {
  return (
    <div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small-min-width">
      <SortProducts handleSort={handleSort} data-testid={dataTestId} />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="search"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearching(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default RefinementList;
