import { ReactElement } from "react";
import { PageTitle, Skeleton } from "../components";
import { Input, Button } from "@material-tailwind/react";

export const LoadingScreen = (): ReactElement => {
  return (
    <div
      id="schoolsScreen"
      className="flex flex-col items-center overflow-auto w-100 pt-5"
    >
      <PageTitle title="Schools" />
      <form className="container mx-auto relative flex w-full max-w-[24rem]">
        <Input
          type="text"
          name="zipcode"
          label="Zipcode"
          className="pr-20"
          maxLength={5}
          containerProps={{ className: "min-w-0" }}
          crossOrigin={"anonymous"}
        />
        <Button
          type="submit"
          size="sm"
          color="blue"
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </form>
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};
