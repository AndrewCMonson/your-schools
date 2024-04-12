import { ReactElement } from "react";
import { useParams, Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Spinner,
} from "@material-tailwind/react";
import { GoogleMap, Rating } from "../components";
import { ADD_FAVORITE } from "../utils/mutations";
import { useGetSchool, useGetMe } from "../hooks";

export const SchoolScreen = (): ReactElement => {
  const { id } = useParams<string>();
  const { loading, error, data: school } = useGetSchool(id || "");
  const { data: me } = useGetMe();
  const [addToFavorites] = useMutation(ADD_FAVORITE);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner color="indigo" className="h-48 w-48" />
      </div>
    );
  if (error) return <div>`Error! ${error.message}`</div>;

  const handleAddToFavorites = async (): Promise<void> => {
    try {
      await addToFavorites({
        variables: { schoolId: `${id}` },
        refetchQueries: ["me"],
      });
    } catch (e: unknown) {
      console.error(e);
    }
  };

  const isFavorite = (id?: string): boolean => {
    if (me) {
      const favorite = me.favorites?.find((favorite) => favorite?.id === id);
      return !!favorite;
    }
    return false;
  };

  const schoolLocationData = {
    name: school?.name,
    address: school?.address,
    latitude: school?.latitude,
    longitude: school?.longitude,
  };

  return (
    <>
      <section
        id="schoolScreen"
        className="h-full w-full pt-5 flex flex-row overflow-scroll"
      >
        <div className="container mx-auto md:flex md:flex-row md:justify-center mb-auto">
          <Card
            color="white"
            className="my-6
                    mx-5 h-auto"
          >
            <h1 className="text-indigo-800 font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl p-6">
              {school?.name}
            </h1>
            <CardBody className="flex flex-col">
              <div className="flex flex-col justify-between w-full md:flex-col">
                {school?.rating && <Rating value={school?.rating} />}
                <div className="">{`${school?.age_range?.[0]} - ${school?.age_range?.[1]} years old`}</div>

                {}
                {isFavorite(id) ? (
                  <Button className="w-1/2 lg:w-1/4 2xl:w-1/6" disabled>
                    Favorited
                  </Button>
                ) : (
                  <Button
                    className="w-1/2 lg:w-1/4 2xl:w-1/6"
                    onClick={handleAddToFavorites}
                    color="green"
                    variant="outlined"
                  >
                    Add to Favorites
                  </Button>
                )}
              </div>
              <div className="h-0.5 bg-black my-6"></div>
              <div className="lg:flex lg:justify-between">
                <div className="lg:w-1/2 mb-6 lg:mr-6">
                  <div className="mb-2 2xl:text-xl">{school?.description}</div>
                  <div className="my-2">
                    <div className="text-lg font-bold 2xl:text-2xl">
                      Tuition
                    </div>
                    <div className="2xl:text-xl">{`$${school?.min_tuition} - $${school?.max_tuition}`}</div>
                  </div>
                  <div className="my-2">
                    <div className="text-lg font-bold 2xl:text-2xl">
                      Enrollment
                    </div>
                    <div className="2xl:text-xl">
                      {`${school?.min_enrollment} - ${school?.max_enrollment} students`}
                    </div>
                    {school?.early_enrollment && (
                      <div>Early enrollment available</div>
                    )}
                  </div>
                  <div className="my-2">
                    <div className="text-lg font-bold 2xl:text-2xl">
                      Days Open
                    </div>
                    <div className="2xl:text-xl">
                      {school?.days_open?.join(", ")}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {school?.images?.map((image, index) => (
                    <div className="flex justify-center" key={index}>
                      {image?.url && (
                        <img
                          className="h-40 w-40 max-w-full rounded-lg object-cover object-center"
                          src={image.url}
                          alt={image.alt ?? "school image"}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
          <Card
            color="white"
            className="mt-6
                    mx-5 md:h-96 lg:w-96 "
          >
            <CardHeader className="relative mt-6 h-36">
              <GoogleMap location={schoolLocationData} />
            </CardHeader>
            <CardBody>
              <div className="">{school?.address}</div>
              <div className="">
                {school?.city}, {school?.state} {school?.zipcode}
              </div>
              <div className="">{school?.phone}</div>
            </CardBody>
            <CardFooter className="flex">
              <Button
                color="indigo"
                ripple={true}
                onClick={() =>
                  (window.location.href = `mailto:${school?.website}`)
                }
              >
                Email
              </Button>
              <Link
                to={school?.website ?? ""}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button color="indigo" ripple={true} className="ml-2">
                  Website
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};
