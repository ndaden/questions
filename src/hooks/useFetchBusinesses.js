import { useQuery } from "@tanstack/react-query";
import { getBusinessesQuery } from "./queries";
import { BUSINESSES_KEY } from "./queryKeys";

const useFetchBusinesses = () => {
  const {
    data: businesses,
    isLoading,
    refetch: refetchBusinesses,
  } = useQuery({
    queryKey: [BUSINESSES_KEY],
    queryFn: getBusinessesQuery,
    enabled: true,
  });

  return { businesses, refetchBusinesses, isLoading };
};

export default useFetchBusinesses;
