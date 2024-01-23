const sortSchools = (schools, sortValue) => {
    if (sortValue === 'tuition-asc') {
        return schools.sort((a, b) => a.max_tuition - b.max_tuition);
    }
    if (sortValue === 'tuition-desc') {
        return schools.sort((a, b) => b.max_tuition - a.max_tuition);
    }
    if (sortValue === 'rating') {
        return schools.sort((a, b) => b.rating - a.rating);
    }
    if (sortValue === 'name') {
        return schools.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (b.name < a.name) {
                return 1;
            }
            return 0;
        });
    }
}

export default sortSchools;