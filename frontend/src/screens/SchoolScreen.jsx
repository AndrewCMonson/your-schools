import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
} from '@material-tailwind/react';
import GoogleMap from "../components/Map";
import Rating from "../components/Rating";
import { GET_SCHOOL } from "../utils/queries";

const SchoolScreen = () => {
    const { id } = useParams();

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
                                Contact
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