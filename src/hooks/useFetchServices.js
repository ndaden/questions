import { useQuery } from "@tanstack/react-query";
import { getServicesQuery } from "./queries";

const useFetchServices = () => {
  const {
    data: services,
    isLoading,
    refetch: refetchServices,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getServicesQuery,
    enabled: true,
  });

  return { services, refetchServices, isLoading };
};

export default useFetchServices;
