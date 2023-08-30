import { useQuery } from "@tanstack/react-query";
import { getUsersQuery } from "./queries";

const useFetchUsers = () => {
  const {
    data: users,
    isLoading,
    refetch: refetchUsers,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersQuery,
    enabled: true,
    staleTime: 60000,
  });

  return { users, refetchUsers, isLoading };
};

export default useFetchUsers;
