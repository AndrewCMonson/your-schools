import { useState } from "react";

const SearchBar = ({ setSearchTerm }) => {
    const [inputValue, setInputValue] = useState('');

	const handleSubmit = event => {
		event.preventDefault();

		setSearchTerm(inputValue);
	};

	return (
            <form onSubmit={handleSubmit} className='flex justify-center my-4'>
                <input
                    type="text"
                    placeholder="Search by Zip Code"
                    className="border-2 border-gray-200 rounded-lg p-4"
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
			
		
	);
};

export default SearchBar;