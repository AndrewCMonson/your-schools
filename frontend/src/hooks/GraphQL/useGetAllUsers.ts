import { useQuery } from "@apollo/client";
import { GetAllUsers } from "../../utils/Graphql/queries";

export const useGetAllUsers = () => {
  const { loading, error, data } = useQuery(GetAllUsers);

  return {
    loading,
    error,
    data: data?.allUsers || [],
  };
};
