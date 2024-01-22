const School = ({ school }) => {
	return (
		<div
			key={school.name}
			className="grid grid-flow-row grid-rows-max border-2 border-gray-200 rounded-lg p-4 mb-3"
		>
			<div className="row-start-1 row-end-1 flex flex-col w-1/2 justify-self-center">
				<a href={`/schools/${school._id}`}>
					<h2 className="underline text-2xl text-center">{school.name}</h2>
				</a>

				<div className="flex flex-row justify-around">
					<p>
						{school.max_tuition < 500
							? `$$`
							: school.max_tuition < 1000
							? `$$$`
							: `$$$$`}
					</p>
					<p>{school.rating}</p>
					<p>
						{school.age_range[0] === school.age_range[1]
							? `${school.age_range[0]} years old`
							: `${school.age_range[0]}-${school.age_range[1]} years old`}
					</p>
				</div>
			</div>
			<div className="flex flex-row justify-around row-start-2 row-end-2">
				<div className="text-center ">
					<h3 className="text-center underline">Address & Contact Info</h3>
					<p>{school.address}</p>
					<p>{`${school.city}, ${school.state}, ${school.zipcode}`}</p>
					<p>{school.phone}</p>
					<p>{school.email}</p>
				</div>
				<div className="">
					{school.days_open.map(day => (
						<p key={day}>{day}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default School;
