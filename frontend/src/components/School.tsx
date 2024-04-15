import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import { School as SchoolType } from "../__generatedTypes__/graphql";
import { Link } from "react-router-dom";
import { Rating } from "./";

export const School = ({ school }: { school: SchoolType }) => {
  return (
    <Card className="w-100 h-full my-4 mx-4">
      <CardBody className="flex flex-col p-4">
        <div>
          <div className="text-lg font-bold">{school.name}</div>
        </div>
        <div className="mt-2 self-baseline">
          <div>{school.address}</div>
          <div>
            {school.city}, {school.state} {school.zipcode}
          </div>
          <div>{school.phone}</div>
          <div>{school.rating && <Rating value={school.rating} />}</div>
          <div>{school.max_tuition ?? 0 > 1000 ? "$$$$" : "$$$"}</div>
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
