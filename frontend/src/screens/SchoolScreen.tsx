import { ReactElement } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SchoolMap, Rating, Review } from "../components";
import { AddFavorite, UserDetailsFragment } from "../utils/";
import { useGetSchool, useGetMe } from "../hooks";
import { useFragment } from "../__generatedTypes__";
import { toast } from "react-toastify";
import { useSessionStore } from "../stores";
import { School } from "../__generatedTypes__/graphql";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { AddReviewForm } from "../components/Forms/AddReviewForm";
import { convertUnixDate } from "../utils/convertUnixDate";

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

  if (!loggedInUser) {
    navigate("/login");
  }

  if (loading)
    return (
      <div className="flex justify-center items-center h-full">
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

  return (
    <>
      <div className="flex bg-base-200 h-full gap-4 justify-center">
        <div className="flex flex-col gap-4 mt-8 overflow-auto bg-base-200 w-1/2">
          <div className="container mx-auto flex flex-col">
            <div className="card shrink-0 bg-base-100 shadow-2xl">
              <div className="flex">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl pt-6 pl-8">
                  {school?.name}
                </h1>
                {school?.isVerified && (
                  <span className="flex flex-col justify-center">
                    <CheckBadgeIcon className="2xl:h-12 mt-6" />
                  </span>
                )}
              </div>
              <div className="flex flex-col card-body">
                <div className="flex flex-col justify-between">
                  <div>
                    {
                      <Rating
                        value={school?.rating ?? 0}
                        size="md"
                        readonly={true}
                      />
                    }
                  </div>
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
                    <Link
                      to={school?.website ?? ""}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className="btn btn-sm btn-primary mt-0.5 ml-2">
                        Website
                      </button>
                    </Link>
                    <button
                      className="btn btn-sm btn-primary mt-0.5 ml-2"
                      onClick={() =>
                        (window.location.href = `mailto:${school?.website}`)
                      }
                    >
                      Email
                    </button>
                  </div>
                </div>
                <div className="h-0.5 bg-black my-6"></div>
                <div className="lg:flex lg:justify-between">
                  <div className="lg:w-1/2 mb-6 lg:mr-6">
                    <div className="mb-2 2xl:text-xl">
                      {school?.description}
                    </div>
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
                  <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3">
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

              <h2 className="font-bold text-3xl pt-6 pl-8">Reviews</h2>
              {school?.reviews?.length === 0 && (
                <div className="card-body">
                  <div className="text-center">No reviews yet</div>
                </div>
              )}
              <div className="card-body">
                {school?.reviews?.map((review, index) => (
                  <Review
                    key={index}
                    review={review.review}
                    owner={review.owner}
                    rating={review.rating}
                    createdAt={convertUnixDate(review.createdAt)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-base-200 mt-8 gap-2">
          <div className="card h-96 w-96 bg-base-100">
            <SchoolMap school={school as School} />
          </div>
          <AddReviewForm schoolId={school?.id} userId={loggedInUser?.id} />
        </div>
      </div>
    </>
  );
};
