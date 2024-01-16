const School = ({ school }) => {
	return (
		<div
			key={school.name}
			className="flex flex-row justify-around border-2 border-gray-200 rounded-lg p-4 mb-3"
		>
			<div className="flex flex-col justify-between">
				<a href={`/schools/${school._id}`}>
					<h2 className="underline text-2xl">{school.name}</h2>
				</a>
				<div className="flex flex-row justify-around">
					<p>
						{school.max_tuition < 500
							? `$$`
							: school.max_tuition < 1000
							? `$$$`
							: `$$$$`}
					</p>
					<p>
						{school.age_range[0] === school.age_range[1]
							? `${school.age_range[0]} years old`
							: `${school.age_range[0]}-${school.age_range[1]} years old`}
					</p>
				</div>
			</div>

			<div className="flex flex-col justify-center">
				<p>{school.address}</p>
				<p>{`${school.city}, ${school.state}, ${school.zipcode}`}</p>
				<p>{school.phone}</p>
				<p>{school.email}</p>
			</div>
			<div className="flex flex-col justify-center">
				{school.days_open.map(day => (
					<p key={day}>{day}</p>
				))}
			</div>
		</div>
	);
};

export default School;
