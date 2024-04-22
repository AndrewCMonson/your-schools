import { useQuery } from "@apollo/client";
import { GET_SCHOOLS } from "../utils/Graphql/queries";

export const useGetSchools = (zipcode: string) => {
  const { loading, error, data } = useQuery(GET_SCHOOLS, {
    variables: { zipcode },
  });

  return { loading, error, data: data?.schools || [] };
};
