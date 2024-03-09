import {
	Button,
	Input,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export const HomeScreen = () => {

	const navigate = useNavigate();

	const handleSearchSubmit = event => {
		event.preventDefault();

		navigate(`/schools?zipcode=${event.target.zipcode.value}`);
	}

	return (
		<>
			<section
				id="homeScreen"
				className="flex justify-end h-full w-100"
			>
				<div className="flex flex-col bg-white justify-center p-8 ">
					<div className="container mx-auto">
						<h1 className="text-center text-4xl mb-4">
							Welcome to Your Schools
						</h1>
						<p className="text-center text-2xl">
							Find the best pre-schools and daycares for your child
						</p>
					</div>
					<div className="container mx-auto flex flex-row justify-center mt-4">
						
							<form
								onSubmit={handleSearchSubmit}
								className="container mx-auto relative flex w-full max-w-[24rem]"
								label="Search"
							>
								<Input
									type="text"
									name="zipcode"
									label="Enter Your Zipcode To Start!"
									className="pr-20"
									
									maxLength={5}
									containerProps={{ className: 'min-w-0' }}
								/>
								<Button
									type="submit"
									size="sm"
									color="blue"
									className="!absolute right-1 top-1 rounded"
									label="Search"
								>
									Search
								</Button>
							</form>
						
					</div>
				</div>
				
			</section>
		</>
	);
}