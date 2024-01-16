const handleSubmit = event => {
    event.preventDefault();
};

const SearchBar = ({setSearchTerm}) => {
  return (
    <form className='flex justify-center my-4'>
				<input
					className='border-black border-2'
					type='text'
					placeholder='Search...'
					onChange={event => {
						setSearchTerm(event.target.value);
					}}
					onSubmit={handleSubmit}
				/>
			</form>
  )
}

export default SearchBar