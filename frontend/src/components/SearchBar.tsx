import { FormEvent, ReactElement, useState } from "react";
import { toast } from "react-toastify";
import { URLSearchParamsInit, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface SearchBarProps {
  setSearchParams?: (params: URLSearchParamsInit) => void;
  setSearch?: (search: boolean) => void;
  setZipcode?: (zipcode: string) => void;
  placeholder?: string;
}

export const SearchBar = ({
  setSearchParams,
  setSearch,
  setZipcode,
  placeholder,
}: SearchBarProps): ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchZipcode, setSearchZipcode] = useState<string>("");

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const zipcode = target.zipcode.value;

    if (!zipcode) {
      toast.error("Please enter a valid zipcode");
      return;
    }

    setSearchParams ? setSearchParams({ zipcode: searchZipcode }) : null;
    setSearch ? setSearch(true) : null;
    setZipcode ? setZipcode(zipcode) : null;

    if (location.pathname !== "/schools") {
      navigate(`/schools?zipcode=${zipcode}`);
    }
  };
  return (
    <>
      <div className="container mx-auto flex flex-row justify-center mt-4">
        <form
          onSubmit={handleSearchSubmit}
          className="container m-4 relative flex w-full max-w-[24rem]"
          id="searchForm"
        >
          <input
            type="text"
            maxLength={5}
            placeholder={placeholder || "Enter a zipcode"}
            className="input input-bordered w-full join-item"
            name="zipcode"
            value={searchZipcode}
            onChange={(event) => setSearchZipcode(event.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary !absolute right-0 join-item"
            form="searchForm"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};
