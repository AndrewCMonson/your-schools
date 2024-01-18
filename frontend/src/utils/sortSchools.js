const sortSchools = (schools, sortValue) => {
    if (sortValue === 'tuition') {
        return schools.sort((a, b) => a.max_tuition - b.max_tuition);
    }
    if (sortValue === 'rating') {
        return schools.sort((a, b) => a.rating - b.rating);
    }
    if (sortValue === 'name') {
        return schools.sort((a, b) => a.name - b.name);
    }
}

export default sortSchools;