import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Fuse, { FuseResult } from "fuse.js";
import { User as UserType } from "../../../__generatedTypes__/graphql";

interface AdminUserFuzzySearchProps {
  searchKeys: string[];
  placeholder: string;
  data: UserType[];
  searchTerm: string;
  setResults: Dispatch<SetStateAction<FuseResult<UserType[]>[]>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export const AdminUserFuzzySearch = ({
  searchKeys,
  placeholder,
  data,
  setResults,
  setSearchTerm,
  searchTerm,
}: AdminUserFuzzySearchProps) => {
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
      className="input input-bordered w-1/2"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};
