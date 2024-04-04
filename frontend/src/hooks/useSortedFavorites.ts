import { useGetMe } from "./useGetMe";
import { useMemo } from "react";

export const useSortedFavorites = (sort: string) => {
  const { loading, data: me } = useGetMe();

  const sortedFavorites = useMemo(() => {
    if (!me) return [];
    if (sort === "rating") {
      return me.favorites?.toSorted(
        (a, b) => (b?.rating ?? 0) - (a?.rating ?? 0),
      );
    }
    if (sort === "price_desc") {
      return me.favorites?.toSorted(
        (a, b) => (a?.max_tuition ?? 0) - (b?.max_tuition ?? 0),
      );
    }
    if (sort === "price_asc") {
      return me.favorites?.toSorted(
        (a, b) => (b?.max_tuition ?? 0) - (a?.max_tuition ?? 0),
      );
    }
    return me.favorites;
  }, [sort, me]);

  return { loading, sortedFavorites };
};
