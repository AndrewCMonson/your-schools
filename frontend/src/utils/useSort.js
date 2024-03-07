import { GET_ME } from './queries';
import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

export const useSortedFavorites = sort => {
	const { loading, data: userData } = useQuery(GET_ME);

	const sortedFavorites = useMemo(() => {
		if (!userData) return [];
		if (sort === 'rating') {
			return userData.me.favorites.toSorted((a, b) => b.rating - a.rating);
		}
		if (sort === 'price') {
			return userData.me.favorites.toSorted(
				(a, b) => a.max_tuition - b.max_tuition
			);
		}
		return userData.me.favorites;
	}, [sort, userData]);

	return { loading, sortedFavorites };
};
