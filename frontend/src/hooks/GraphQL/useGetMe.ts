import { GetMe } from "../../utils/Graphql/queries";
import { useQuery } from "@apollo/client";

export const useGetMe = () => {
  const { client, loading, error, data } = useQuery(GetMe);

  return { client, loading, error, data: data?.me };
};
