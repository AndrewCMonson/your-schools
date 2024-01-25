const setLocalStorage = (schools, zipcode) => {
    localStorage.setItem('schools', JSON.stringify(schools));
    localStorage.setItem('zipcode', zipcode);
};

export default setLocalStorage;