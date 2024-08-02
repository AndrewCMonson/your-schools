import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Fuse, { FuseResult } from "fuse.js";
import { School as SchoolType } from "../../__generatedTypes__/graphql";

interface AdminFuzzySearchProps {
  searchKeys: string[];
  placeholder: string;
  data: SchoolType[];
  searchTerm: string;
  setResults: Dispatch<SetStateAction<FuseResult<SchoolType[]>[]>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export const AdminFuzzySearch = ({
  searchKeys,
  placeholder,
  data,
  setResults,
  setSearchTerm,
  searchTerm,
}: AdminFuzzySearchProps) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const fuse = new Fuse(data, {
      keys: [...searchKeys],
    });
    setSearchTerm(e.target.value);
    setResults(fuse.search(e.target.value));
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered  w-1/2"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};
