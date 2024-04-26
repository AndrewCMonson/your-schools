import { Favorite } from "./Favorite";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useSortedFavorites } from "../../hooks";
import { SearchBar } from "../SearchBar";
import { SetURLSearchParams } from "react-router-dom";

interface FavoritesProps {
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
  setSearchParams: SetURLSearchParams;
}

export const Favorites = ({
  sort,
  setSort,
  setSearchParams,
}: FavoritesProps) => {
  const { sortedFavorites } = useSortedFavorites(sort);

  const handleFavoritesSort = (event: ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
    setSearchParams({ favoriteSort: event.target.value });
  };

  return (
    <>
      <div className="card shrink-0 bg-base-100 shadow-2xl min-w-1/2 xl:w-1/2 m-4 lg:m-0">
        <div className="card-body">
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl text-center">
              Favorites
            </h1>
          </div>
          {sortedFavorites?.length ?? 0 > 1 ? (
            <div className="flex justify-center">
              <select
                className="p-2 select select-boredered w-full max-w-xs"
                value={sort}
                onChange={(e) => handleFavoritesSort(e)}
              >
                <option value="">Sort By</option>
                <option value="rating">Rating</option>
                <option value="price_asc">Price(High to Low)</option>
                <option value="price_desc">Price(Low to High)</option>
              </select>
            </div>
          ) : null}
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th className="hidden lg:table-cell">Contact</th>
                  <th className="hidden lg:table-cell">Website</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {sortedFavorites?.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center">
                      You don&apos;t have any favorites yet. Search below to
                      find some!
                    </td>
                  </tr>
                )}
                {sortedFavorites?.map((favorite) => (
                  <Favorite key={favorite.id} favorite={favorite} />
                ))}
              </tbody>
            </table>
            {sortedFavorites?.length === 0 && (
              <>
                <SearchBar setSearchParams={setSearchParams} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
