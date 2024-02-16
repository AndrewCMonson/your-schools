import { Button, Typography } from '@material-tailwind/react';
import { Card, CardBody, CardFooter } from '@material-tailwind/react';

const Skeleton = () => {
	return (
		<Card className="mt-6 w-96 animate-pulse">
			<CardBody>
				<Typography
					as="div"
					variant="paragraph"
					className="mb-2 h-2 w-full rounded-full bg-gray-300"
				>
					&nbsp;
				</Typography>
				<Typography
					as="div"
					variant="paragraph"
					className="mb-2 h-2 w-full rounded-full bg-gray-300"
				>
					&nbsp;
				</Typography>
				<Typography
					as="div"
					variant="paragraph"
					className="mb-2 h-2 w-full rounded-full bg-gray-300"
				>
					&nbsp;
				</Typography>
				<Typography
					as="div"
					variant="paragraph"
					className="mb-2 h-2 w-full rounded-full bg-gray-300"
				>
					&nbsp;
				</Typography>
				<Typography
					as="div"
					variant="paragraph"
					className="mb-2 h-2 w-full rounded-full bg-gray-300"
				>
					&nbsp;
				</Typography>
				<Typography
					as="div"
					variant="paragraph"
					className="mb-2 h-2 w-full rounded-full bg-gray-300"
				>
					&nbsp;
				</Typography>
			</CardBody>
			<CardFooter className="pt-0">
				<Button
					disabled
					tabIndex={-1}
					className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
				>
					&nbsp;
				</Button>
			</CardFooter>
		</Card>
	);
};
export default Skeleton;
