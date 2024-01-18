import HomeSection from '../components/HomeSection';

const HomeScreen = () => {
	return (
		<>
			<HomeSection>
				<div className="container my-4 mx-auto">
					<h1 className="text-center text-4xl">Welcome to Your Schools</h1>
					<p className="text-center text-2xl">
						Find the best schools for your child
					</p>
				</div>
				<div className="container mx-auto flex flex-row justify-center">
					<a href="/schools">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Start Your Search
						</button>
					</a>
				</div>
			</HomeSection>
			<HomeSection>
				<div className="container my-4 mx-auto">
					<h1 className="text-center text-4xl">Why Choose YS?</h1>
					<div className="flex flex-col my-4 justify-around md:flex-row">
						<p className="text-center text-2xl md:w-1/2 flex flex-col justify-center">
							No one knows your child better than you do. We provide the tools
							to help you find the best environment for your child.
						</p>
					</div>
				</div>
			</HomeSection>
			<HomeSection className="container mx-auto flex flex-col justify-center h-1/3">
				<div className="container my-4 mx-auto">
					<h1 className="text-center text-4xl">How it Works</h1>
					<div className="flex flex-col my-4 justify-around md:flex-row">
						<p className="text-center text-2xl md:w-1/2">
							Search for schools in your area by zip code.
						</p>
						<p className="text-center text-2xl md:w-1/2">
							Filter your search by age, tuition, and more.
						</p>
					</div>
				</div>
			</HomeSection>
		</>
	);
};

export default HomeScreen;
