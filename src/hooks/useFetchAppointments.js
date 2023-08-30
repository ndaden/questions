import { useQuery } from "@tanstack/react-query";
import { getAppointmentsQuery } from "./queries";

const useFetchAppointments = () => {
  const {
    data: appointments,
    isLoading,
    refetch: refetchAppointments,
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointmentsQuery,
    enabled: true,
  });

  return { appointments, refetchAppointments, isLoading };
};

export default useFetchAppointments;
