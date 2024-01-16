import School from './School';

const Schools = ({ schools }) => {
	return (
		<div className="container mx-auto">
			{schools.map(school => (
				<School key={school.name} school={school} />
			))}
		</div>
	);
};

export default Schools;
