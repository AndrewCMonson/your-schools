import { GET_ME } from "../utils/Graphql/queries";
import { REMOVE_FAVORITE } from "../utils/Graphql/";
import { useMutation } from "@apollo/client";
import { PageTitle, Rating } from "../components";
import { useState, ReactElement } from "react";
import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useSortedFavorites } from "../hooks/useSortedFavorites";
import { SearchBar } from "../components";

export const FavoritesScreen = (): ReactElement => {
  const [removeFavorite] = useMutation(REMOVE_FAVORITE);
  const [sort, setSort] = useState<string>("");
  const { loading, sortedFavorites } = useSortedFavorites(sort);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleRemoveFavorite = async (schoolId: string) => {
    try {
      await removeFavorite({
        variables: { schoolId },
        refetchQueries: [{ query: GET_ME }],
      });
    } catch (e) {
      console.error(e);
    }
  };

  if (sortedFavorites?.length === 0) {
    return (
      <section
        id="favoritesScreen"
        className="flex flex-col items-center overflow-auto w-100 pt-5"
      >
        <PageTitle title="Favorites" />
        <div className="text-2xl text-center">
          You don&apos;t have any favorites yet. Search below to find some!
          <SearchBar placeholder="Search Here!" />
        </div>
      </section>
    );
  }

  return (
    <section
      id="favoritesScreen"
      className="flex flex-col items-center overflow-auto w-100 pt-5"
    >
      <PageTitle title="Favorites" />
      <div className="flex justify-center">
        <select
          className="p-2"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="rating">Rating</option>
          <option value="price_asc">Price(High to Low)</option>
          <option value="price_desc">Price(Low to High)</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {sortedFavorites?.map((school) => (
          <Card key={school?.id} color="white" className="my-6 ">
            <CardBody className="flex flex-col">
              <h2 className="text-2xl mb-2 text-indigo-800 font-bold">
                {school?.name}
              </h2>
              <Rating value={school?.rating || 0} />
              <p>Max Tuition ${school?.max_tuition}</p>
            </CardBody>
            <CardFooter>
              <Link to={`/schools/${school?.id}`}>
                <Button color="indigo" size="lg" className="mr-3">
                  Visit
                </Button>
              </Link>
              <Button
                color="red"
                size="lg"
                onClick={() => handleRemoveFavorite(school?.id || "")}
                className="mr-3"
              >
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
