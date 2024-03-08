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
				className="flex flex-col items-center h-full w-100 pt-5"
			>
				<div className="container mx-auto flex flex-col justify-center h-1/3">
					<div className="container my-4 mx-auto">
						<h1 className="text-center text-white text-4xl">
							Welcome to Your Schools
						</h1>
						<p className="text-center text-white text-2xl">
							Find the best schools for your child
						</p>
					</div>
					<div className="container mx-auto flex flex-row justify-center">
						
							<form
								onSubmit={handleSearchSubmit}
								className="container mx-auto relative flex w-full max-w-[24rem]"
								label="Search"
							>
								<Input
									type="text"
									name="zipcode"
									label="Zipcode"
									className="pr-20"
									color='white'
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
				<div className="container mx-auto flex flex-col justify-center h-1/3">
					<div className="container my-4 mx-auto">
						<h1 className="text-center text-white text-4xl">Why Choose YS?</h1>
						<div className="flex flex-col my-4 justify-around md:flex-row">
							<p className="text-center text-white text-2xl md:w-1/2 flex flex-col justify-center">
								No one knows your child better than you do. We provide the tools
								to help you find the best environment for your child.
							</p>
						</div>
					</div>
				</div>
				<div className="container mx-auto flex flex-col justify-center h-1/3">
					<div className="container my-4 mx-auto">
						<h1 className="text-center text-white text-4xl">How it Works</h1>
						<div className="flex flex-col my-4 justify-around md:flex-row">
							<p className="text-center text-white text-2xl md:w-1/2">
								Search for schools in your area by zip code.
							</p>
							<p className="text-center text-white text-2xl md:w-1/2">
								Filter your search by age, tuition, and more.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
