import { GET_ME } from '../utils/queries';
import { REMOVE_FAVORITE } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import PageTitle from '../components/PageTitle';
import Rating from '../components/Rating';
import { useState } from 'react';
import { Card, CardBody, CardFooter, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useSortedFavorites } from '../utils/useSort';

const FavoritesScreen = () => {
	const [removeFavorite] = useMutation(REMOVE_FAVORITE);
	const [sort, setSort] = useState('');
	const { loading, sortedFavorites } = useSortedFavorites(sort);

	if (loading) {
		return <div>Loading...</div>;
	}

	const handleRemoveFavorite = async schoolId => {
		try {
			await removeFavorite({
				variables: { schoolId },
				refetchQueries: [{ query: GET_ME }],
			});
		} catch (e) {
			console.error(e);
		}
	};

	if (sortedFavorites.length === 0) {
		return (
			<section
				id="favoritesScreen"
				className="flex flex-col items-center overflow-auto w-100 pt-5"
			>
				<PageTitle title="Favorites" />
				<div className="text-2xl text-center">
					You don&apos;t have any favorites yet. Add some from the{' '}
					<span className="underline italic">
						<Link to="/schools" className="hover:text-gray-400">
							schools page
						</Link>
					</span>
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
					onChange={e => setSort(e.target.value)}
				>
					<option value="">Sort By</option>
					<option value="rating">Rating</option>
					<option value="price_desc">Price(High to Low)</option>
					<option value="price_asc">Price(Low to High)</option>
				</select>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
				{sortedFavorites.map(school => (
					<Card key={school.id} color="white" className="my-6 ">
						<CardBody className="flex flex-col">
							<h2 className="text-2xl mb-2 text-indigo-800 font-bold">{school.name}</h2>
							<Rating value={school.rating} />
							<p>Max Tuition ${school.max_tuition}</p>
						</CardBody>
						<CardFooter>
							<Link to={`/schools/${school.id}`}>
								<Button color="indigo" size="lg" className="mr-3">
									Visit
								</Button>
							</Link>
							<Button
								color="red"
								size="lg"
								onClick={() => handleRemoveFavorite(school.id)}
								className='mr-3'
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
export default FavoritesScreen;
