const setMessage = (schools, setPageMessage, zipcode) => {
    if (schools.length > 1) {
        setPageMessage(
            `Showing ${schools.length} schools in ${zipcode} `
        );
    }
    if (schools.length === 1) {
        setPageMessage(
            `Showing ${schools.length} school in ${zipcode}`
        );
    }
    if (schools.length === 0 && zipcode) {
        setPageMessage('No schools found in your area');
    }
};

export default setMessage;