import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Rating } from "./Rating";

interface SchoolProps {
  id?: string | null | undefined;
  name?: string | null | undefined;
  address?: string | null | undefined;
  city?: string | null | undefined;
  state?: string | null | undefined;
  zipcode?: string | null | undefined;
  phone?: string | null | undefined;
  rating?: number | null | undefined;
  max_tuition?: number | null | undefined;
}

export const School = ({ school }: { school: SchoolProps | null }) => {
  return (
    <Card className="w-100 h-full my-4 mx-4">
      <CardBody className="flex flex-col p-4">
        <div>
          <div className="text-lg font-bold">{school?.name}</div>
        </div>
        <div className="mt-2 self-baseline">
          <div>{school?.address}</div>
          <div>
            {school?.city}, {school?.state} {school?.zipcode}
          </div>
          <div>{school?.phone}</div>
          <div>
            <Rating value={school?.rating} />
          </div>
          <div>{school?.max_tuition ?? 0 > 1000 ? "$$$$" : "$$$"}</div>
        </div>
      </CardBody>
      <CardFooter>
        <Link to={`/schools/${school?.id}`}>
          <Button color="indigo" ripple={true}>
            Visit School Page
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
