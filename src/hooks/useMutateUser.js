import { useMutation } from "@tanstack/react-query";
import { createUserQuery } from "./queries";

const useMutateUser = () => {
  const { mutate: mutateUser } = useMutation({
    mutationFn: (formData) => createUserQuery(formData),
  });

  return { mutateUser };
};

export default useMutateUser;
