import { GET_ME } from "../utils/Graphql/queries";
import { useQuery } from "@apollo/client";

export const useGetMe = () => {
  const { loading, error, data } = useQuery(GET_ME);

  return { loading, error, data: data?.me };
};
