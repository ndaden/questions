import { useQuery } from "@tanstack/react-query";
import { getBusinessesQuery } from "./queries";

const useFetchBusinesses = () => {
  const {
    data: businesses,
    isLoading,
    refetch: refetchBusinesses,
  } = useQuery({
    queryKey: ["businesses"],
    queryFn: getBusinessesQuery,
    enabled: true,
  });

  return { businesses, refetchBusinesses, isLoading };
};

export default useFetchBusinesses;
