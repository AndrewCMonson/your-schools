import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const School = ({ school }) => {
  return (
    <Card className="w-100 h-full my-4 mx-4">
      <CardBody className="flex flex-col p-4">
        <div>
          <div className="text-lg font-bold">{school.name}</div>
        </div>
        <div className="mt-2 self-baseline">
          <div className="">{school.address}</div>
          <div className="">
            {school.city}, {school.state} {school.zipcode}
          </div>
          <div className="">{school.phone}</div>
          <div className="">{school.type}</div>
          <div className="">
            <Rating value={school.rating} />
          </div>
          <div className="">{school.max_tuition > 1000 ? "$$$$" : "$$$"}</div>
        </div>
      </CardBody>
      <CardFooter>
        <Link to={`/schools/${school.id}`}>
          <Button color="indigo" ripple={true}>
            Visit School Page
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default School;
