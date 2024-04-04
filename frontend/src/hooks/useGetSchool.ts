import { GET_SCHOOL } from "../utils/queries";
import { useQuery } from "@apollo/client";

export const useGetSchool = (id: string) => {
  const { loading, error, data } = useQuery(GET_SCHOOL, {
    variables: { id },
  });

  return { loading, error, data: data?.school };
};
