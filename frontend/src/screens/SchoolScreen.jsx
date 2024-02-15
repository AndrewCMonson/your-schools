import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import GoogleMap from "../components/Map";

const SchoolScreen = () => {
    const { id } = useParams();

    const GET_SCHOOL = gql`
        query School($id: ID!) {
            school(id: $id) {
                id
                name
                address
                city
                state
                zipcode
                latitude
                longitude
                phone
                website
                email
                rating
                offers_daycare
                age_range
                early_enrollment
                min_tuition
                max_tuition
                days_open
                days_closed
                opening_hours
                closing_hours
                min_enrollment
                max_enrollment
                min_student_teacher_ratio
                max_student_teacher_ratio
            }
        }
    `;

    const {loading, error, data} = useQuery(GET_SCHOOL, {
        variables: {id}
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


  return (
		<>
			<div className="h-full w-100">
				<GoogleMap location={data.school} />
				<div>{JSON.stringify(data.school)}</div>
			</div>
		</>
	);
}
export default SchoolScreen