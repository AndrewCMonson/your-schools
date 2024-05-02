import { useGetMe } from "./useGetMe";
import { useMemo } from "react";
import { useFragment } from "../../__generatedTypes__";
import { UserDetailsFragment } from "../../utils/Graphql";

export const useSortedFavorites = (sort: string) => {
  const { loading, data } = useGetMe();

  const user = useFragment(UserDetailsFragment, data);

  const sortedFavorites = useMemo(() => {
    if (!user) return [];
    if (sort === "rating") {
      return user?.favorites?.toSorted(
        (a, b) => (b?.rating ?? 0) - (a?.rating ?? 0),
      );
    }
    if (sort === "price_desc") {
      return user?.favorites?.toSorted(
        (a, b) => (a?.max_tuition ?? 0) - (b?.max_tuition ?? 0),
      );
    }
    if (sort === "price_asc") {
      return user?.favorites?.toSorted(
        (a, b) => (b?.max_tuition ?? 0) - (a?.max_tuition ?? 0),
      );
    }
    return user.favorites;
  }, [sort, user]);

  return { loading, sortedFavorites };
};
