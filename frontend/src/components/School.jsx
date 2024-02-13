import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const School = ({ school }) => {
	return (
		<Card color="white" className="w-full my-4">
			<CardBody>
				<Typography color="blueGray" className="">
					{school.name}
				</Typography>
				<Typography color="blueGray" className="">
					{school.address}
				</Typography>
				<Typography color="blueGray" className="">
					{school.city}, {school.state} {school.zipcode}
				</Typography>
				<Typography color="blueGray" className="">
					{school.phone}
				</Typography>
				<Typography color="blueGray" className="">
					{school.type}
				</Typography>
				<Typography color="blueGray" className="">
					<Rating value={school.rating} />
				</Typography>
			</CardBody>
			<CardFooter>
				<Button color="blue" buttonType="link" ripple="light">
					<Link to={`/schools/${school._id}`}>Visit School</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default School;
