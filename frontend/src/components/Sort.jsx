const Sort = ({ setSortValue }) => {
	return (
		<div className="text-center">
			<label htmlFor="sort" className="text-center text-l">
				Sort by:
			</label>
			<select
				name="sort"
				id="sort"
				className="mx-auto my-4"
				onChange={event => setSortValue(event.target.value)}
			>
				<option value="name">Name</option>
				<option value="rating">Rating</option>
				<option value="tuition">Tuition</option>
			</select>
		</div>
	);
};
export default Sort;
