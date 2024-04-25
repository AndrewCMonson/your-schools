import { Link } from "react-router-dom";
import { School } from "../../__generatedTypes__/graphql";
import { useMutation } from "@apollo/client";
import { TrashCan } from "../Misc/TrashCan";
import { REMOVE_FAVORITE, GET_ME } from "../../utils/Graphql";

type Props = {
  favorite: School;
};
export const Favorite = ({ favorite }: Props) => {
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
              <div className="font-bold">{favorite.name}</div>
              <div className="text-sm opacity-50">{favorite.city}</div>
            </div>
          </div>
        </td>
        <td>
          {favorite.phone}
          <br />
          {favorite.email}
        </td>
        <td>
          <a href={favorite.website || "/"} target="_blank" rel="noreferrer">
            {favorite.website ? favorite.website : "no website provided"}
          </a>
        </td>
        <th>
          <Link to={`/schools/${favorite.id}`} className="btn btn-ghost btn-xs">
            View
          </Link>
        </th>
      </tr>
    </>
  );
};
