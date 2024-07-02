import { useQuery } from "@apollo/client";
import { GetAllSchools } from "../../utils/Graphql/queries";

export const useGetAllSchools = () => {
  const { loading, error, data } = useQuery(GetAllSchools);

  return {
    loading,
    error,
    data: data?.allSchools || [],
  };
};
