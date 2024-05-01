import { ReactElement } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { GoogleMap, Rating } from "../components";
import { AddFavorite, UserDetailsFragment } from "../utils/";
import { useGetSchool, useGetMe } from "../hooks";
import { useFragment } from "../__generatedTypes__";
import { toast } from "react-toastify";
import { useSessionStore } from "../stores";

export const SchoolScreen = (): ReactElement => {
  const { id } = useParams<string>();
  const { loading, error, data: school } = useGetSchool(id || "");
  const { user: loggedInUser } = useSessionStore();
  const navigate = useNavigate();
  const { data } = useGetMe();
  const me = useFragment(UserDetailsFragment, data);
  const [addToFavorites] = useMutation(AddFavorite, {
    onCompleted: () => {
      toast.success("Added to favorites");
    },
    onError: (e) => {
      toast.error(e.message);
      console.error(e);
    },
  });

  console.log(school);

  if (!loggedInUser) {
    navigate("/login");
  }

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  if (error) return <div>`Error! ${error.message}`</div>;

  const handleAddToFavorites = async () => {
    addToFavorites({
      variables: { schoolId: `${id}` },
      refetchQueries: ["me"],
    });
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
    latitude: school?.latLng?.lat,
    longitude: school?.latLng?.lng,
  };

  return (
    <>
      <section
        id="schoolScreen"
        className="h-full w-full pt-5 flex flex-row overflow-scroll bg-base-200"
      >
        <div className="container mx-auto md:flex md:flex-row md:justify-center mb-auto">
          <div className="card shrink-0 bg-base-100 shadow-2xl min-w-1/2 xl:w-1/2 m-4 lg:m-0">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl p-6">
              {school?.name}
            </h1>
            <div className="flex flex-col card-body">
              <div className="flex flex-col justify-between">
                <div>{school?.rating && <Rating value={school?.rating} />}</div>
                <div>
                  {isFavorite(id) ? (
                    <button className="btn btn-sm  mt-0.5" disabled>
                      Favorited
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-primary mt-0.5"
                      onClick={handleAddToFavorites}
                      color="green"
                    >
                      Add to Favorites
                    </button>
                  )}
                </div>
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
            </div>
          </div>
          <div className="card mx-5 md:h-96 lg:w-96 bg-base-100">
            <div className="relative h-48 border rounded-md m-3">
              <GoogleMap location={schoolLocationData} />
            </div>
            {/* <div className="h-0.5 bg-black mx-3"></div> */}
            <div className="card-body">
              <div className="">{school?.address}</div>
              <div className="">
                {school?.city}, {school?.state} {school?.zipcode}
              </div>
              <div className="">{school?.phone}</div>

              <div className="flex">
                <button
                  className="btn btn-sm btn-primary mt-0.5"
                  onClick={() =>
                    (window.location.href = `mailto:${school?.website}`)
                  }
                >
                  Email
                </button>
                <Link
                  to={school?.website ?? ""}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="btn btn-sm btn-primary mt-0.5 ml-2">
                    Website
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
