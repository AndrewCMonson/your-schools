import { GetSchool } from "../utils/Graphql/queries";
import { useQuery } from "@apollo/client";

export const useGetSchool = (id: string) => {
  const { loading, error, data } = useQuery(GetSchool, {
    variables: { id },
  });

  return { loading, error, data: data?.school };
};
