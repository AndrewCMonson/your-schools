import { useState } from 'react';

const SearchBar = ({ setSearchParams }) => {
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = event => {
		event.preventDefault();

		setSearchParams({ zipcode: inputValue });
	};

	const handleInputChange = event => {
		if (isNaN(event.target.value)) return;

		setInputValue(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className="flex justify-center my-4">
			<input
				type="text"
				name="zipcode"
				placeholder="Search by Zip Code"
				className="border-2 border-gray-200 rounded-lg p-4"
				value={inputValue}
				maxLength={5}
				onChange={handleInputChange}
			/>
			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Search
			</button>
		</form>
	);
};

export default SearchBar;
