import { Favorite } from "./Favorite";
import { ChangeEvent } from "react";
import { useSortedFavorites } from "../../hooks";

interface FavoritesProps {
  sort: string;
  setSort: (sort: string) => void;
  setSearchParams: (params: any) => void;
}

export const Favorites = ({
  sort,
  setSort,
  setSearchParams,
}: FavoritesProps) => {
  // const [sort, setSort] = useState<string>("");
  const { sortedFavorites } = useSortedFavorites(sort);

  const handleFavoritesSort = (event: ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
    setSearchParams({ favoriteSort: event.target.value });
  };

  return (
    <>
      <div className="card shrink-0 bg-base-100 shadow-2xl">
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
                <option selected>Sort By</option>
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
                  <th>Contact</th>
                  <th>Website</th>
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
          </div>
        </div>
      </div>
    </>
  );
};
