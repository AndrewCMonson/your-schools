import { useQuery } from "@apollo/client";
import { GetSchools } from "../utils/Graphql/queries";

export const useGetSchools = (zipcode: string) => {
  const { loading, error, data } = useQuery(GetSchools, {
    variables: { zipcode },
  });

  return { loading, error, data: data?.schools || [] };
};
