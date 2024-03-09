import { GET_SCHOOLS } from './queries';
import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

export const useSortedSchools = (sort, query, zipcode) => {
	const { loading, data } = useQuery(query, {
		variables: { zipcode },
	});

	const sortedSchools = useMemo(() => {
		if (!data) return [];
		if (sort === 'rating') {
			return data.schools.sort((a, b) => b.rating - a.rating);
		}
		if (sort === 'price_desc') {
			return data.schools.sort((a, b) => a.max_tuition - b.max_tuition);
		}
		if (sort === 'price_asc') {
			return data.schools.sort((a, b) => b.max_tuition - a.max_tuition);
		}
		return data.schools;
	}, [sort, data]);

	return { loading, sortedSchools };
};
