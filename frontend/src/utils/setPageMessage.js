const setMessage = (schools, setPageMessage, searchParams) => {
    if (schools.length > 1) {
        setPageMessage(
            `Showing ${schools.length} schools in ${searchParams.get('zipcode')} `
        );
    }
    if (schools.length === 1) {
        setPageMessage(
            `Showing ${schools.length} school in ${searchParams.get('zipcode')}`
        );
    }
    if (schools.length === 0 && searchParams.get('zipcode')) {
        setPageMessage('No schools found in your area');
    }
};

export default setMessage;