import { GetMe } from "../../utils/Graphql/queries";
import { useQuery } from "@apollo/client";

export const useGetMe = () => {
  const { loading, error, data } = useQuery(GetMe);

  return { loading, error, data: data?.me };
};
