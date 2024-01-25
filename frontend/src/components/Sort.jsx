const Sort = ({ setSort }) => {
	return (
		<div className="text-center">
			<label htmlFor="sort" className="text-center text-l">
				Sort by:
			</label>
			<select
				name="sort"
				id="sort"
				className="mx-auto my-4"
				onChange={event => setSort(event.target.value)}
			>
				<option value="name">Name</option>
				<option value="rating">Rating</option>
				<option value="tuition_asc">Tuition (low to high)</option>
				<option value="tuition_desc">Tuition (high to low)</option>
			</select>
		</div>
	);
};
export default Sort;
