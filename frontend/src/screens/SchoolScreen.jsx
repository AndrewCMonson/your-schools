import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
} from '@material-tailwind/react';
import GoogleMap from "../components/Map";
import Rating from "../components/Rating";

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
			<div id="schoolScreen" className=" flex justify-center flex-row h-full w-100">
                <div className="flex flex-row container mx-auto">
                    <Card color="white" className="mt-6 h-96 w-96">
                        <CardHeader className="relative mt-6 h-56">
                            <GoogleMap location={data.school} />
                        </CardHeader>
                        <CardBody>
                            <div className="">{data.school.address}</div>
                            <div className="">{data.school.city}, {data.school.state} {data.school.zipcode}</div>
                            <div className="">{data.school.phone}</div>
                            <div className="">{data.school.type}</div>
                        </CardBody>
                        <CardFooter className="pt-2">
                            <Button color="blue" ripple={true}>
                                Visit School
                            </Button>
                        </CardFooter>
                    </Card>
                    
                    <div className="flex flex-col w-1/2">
                        <h1 className="text-4xl font-bold">{data.school.name}</h1>
                        <Rating value={data.school.rating} />
                        <h2 className="text-2xl font-bold">Contact Information</h2>
                        
                        
                    </div>
                </div>
			</div>
		</>
	);
}
export default SchoolScreen