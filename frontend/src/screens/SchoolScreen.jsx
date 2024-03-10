import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
} from '@material-tailwind/react';
import GoogleMap from '../components/Map';
import Rating from '../components/Rating';
import { GET_SCHOOL, GET_ME } from '../utils/queries';
import { ADD_FAVORITE } from '../utils/mutations';
import { notify } from '../utils/notify';
import Auth from '../utils/auth';

const SchoolScreen = () => {
	const { id } = useParams();

	const { loading, error, data } = useQuery(GET_SCHOOL, {
		variables: { id },
	});

	const { data: userData } = useQuery(GET_ME);

	const [addToFavorites] = useMutation(ADD_FAVORITE);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const handleAddToFavorites = async () => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;

		if (!token) {
			notify('error', 'Please login to add to favorites.');
			return false;
		}

		try {
			await addToFavorites({
				variables: { schoolId: `${id}` },
			});
		} catch (e) {
			console.error(e);
		}
	};

	const isFavorite = () => {
		if (userData) {
			const favorites = userData.me.favorites.map(favorite => favorite.id);
			return favorites.includes(id);
		}
		return false;
	};

	return (
		<>
			<section
				id="schoolScreen"
				className="h-full w-full pt-5 flex flex-row overflow-scroll"
			>
				<div className="container mx-auto md:flex md:flex-row md:justify-center">
					<Card
						color="white"
						className="my-6
                    mx-5 h-auto"
					>
						<h1 className="text-lg md:text-2xl p-6">{data.school.name}</h1>
						<CardBody className="flex flex-col">
							<div className="flex flex-col justify-between w-full md:flex-col">
								<Rating value={data.school.rating} />
								<div className="">{`${data.school.age_range[0]} - ${data.school.age_range[1]} years old`}</div>

								{}
								{isFavorite() ? (
									<Button className="w-1/2 lg:w-1/3" disabled>
										Favorited
									</Button>
								) : (
									<Button
										className="w-1/2 lg:w-1/3"
										onClick={handleAddToFavorites}
										color="green"
										variant="outlined"
									>
										Add to Favorites
									</Button>
								)}
							</div>
							<div className="h-0.5 bg-black my-6"></div>
							<div className="lg:flex">
								<div className="lg:w-1/2 mb-6 lg:mr-6">
									<div className="mb-2">{data.school.description}</div>
									<div className="">
										<div className="text-lg font-bold">Tuition</div>
										<div>{`$${data.school.min_tuition} - $${data.school.max_tuition}`}</div>
									</div>
									<div className="">
										<div className="text-lg font-bold">Enrollment</div>
										<div>
											{`${data.school.min_enrollment} - ${data.school.max_enrollment} students`}
										</div>
										{data.school.early_enrollment && (
											<div>Early enrollment available</div>
										)}
									</div>
									<div className="">
										<div className="text-lg font-bold">Days Open</div>
										<div>{data.school.days_open.join(', ')}</div>
									</div>
								</div>

								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
									{data.school.images.map(({ url }, index) => (
										<div className="flex justify-center" key={index}>
											<img
												className="h-40 w-40 max-w-full rounded-lg object-cover object-center"
												src={url}
												alt="gallery-photo"
											/>
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
							<GoogleMap location={data.school} />
						</CardHeader>
						<CardBody>
							<div className="">{data.school.address}</div>
							<div className="">
								{data.school.city}, {data.school.state} {data.school.zipcode}
							</div>
							<div className="">{data.school.phone}</div>
							<div className="">{data.school.type}</div>
						</CardBody>
						<CardFooter className="flex">
							<Button
								color="blue"
								ripple={true}
								onClick={() =>
									(window.location = `mailto:${data.school.website}`)
								}
							>
								Email
							</Button>
							<Link
								to={data.school.website}
								target="_blank"
								rel="noreferrer noopener"
							>
								<Button color="blue" ripple={true} className="ml-2">
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
export default SchoolScreen;
