import { School } from "../../__generatedTypes__/graphql";
import { useMutation } from "@apollo/client";
import { TrashCan, FollowLink } from "../Misc";
import { REMOVE_FAVORITE, GET_ME } from "../../utils/Graphql";
import { WebsiteLink } from "../Misc/WebsiteLink";

type FavoriteProps = {
  favorite: School;
};
export const Favorite = ({ favorite }: FavoriteProps) => {
  const [removeFavorite] = useMutation(REMOVE_FAVORITE);

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

  return (
    <>
      <tr>
        <th>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => handleRemoveFavorite(favorite?.id || "")}
          >
            <TrashCan />
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold flex gap-1">
                {favorite.name}
                <FollowLink link={`/schools/${favorite.id}`} />
              </div>
              <div className="text-sm opacity-50">{favorite.city}</div>
            </div>
          </div>
        </td>
        <td className="hidden lg:table-cell">
          {favorite.phone}
          <br />
          {favorite.email}
        </td>
        <td className="hidden 3xl:table-cell">
          <WebsiteLink link={favorite.website || ""} />
        </td>
      </tr>
    </>
  );
};
