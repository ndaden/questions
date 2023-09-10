import { useQuery } from "@tanstack/react-query";
import { getServicesQuery } from "./queries";
import { SERVICES_KEY } from "./queryKeys";

const useFetchServices = () => {
  const {
    data: services,
    isLoading,
    refetch: refetchServices,
  } = useQuery({
    queryKey: [SERVICES_KEY],
    queryFn: getServicesQuery,
    enabled: true,
  });

  return { services, refetchServices, isLoading };
};

export default useFetchServices;
