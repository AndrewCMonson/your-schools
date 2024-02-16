import { Card, CardBody, CardFooter, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const School = ({ school }) => {
	return (
		<Card className="w-full my-4">
			<CardBody>
				<div className="">{school.name}</div>
				<div className="">{school.address}</div>
				<div className="">
					{school.city}, {school.state} {school.zipcode}
				</div>
				<div className="">{school.phone}</div>
				<div className="">{school.type}</div>
				<div className="">
					<Rating value={school.rating} />
				</div>
				<div className="">{school.max_tuition > 1000 ? '$$$$' : '$$$'}</div>
			</CardBody>
			<CardFooter>
				<Link to={`/schools/${school.id}`}>
					<Button color="blue" ripple={true}>
						Visit School Page
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
};

export default School;
