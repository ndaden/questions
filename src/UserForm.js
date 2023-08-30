import { Button, Input } from "@nextui-org/react";
import useMutateUser from "./hooks/useMutateUser";

const UserForm = () => {
  const { mutateUser } = useMutateUser();

  const submitUserForm = async (e) => {
    const form = document.querySelector("form[name=userForm]");
    const formData = new FormData(form);
    const jsonUserData = toDatabaseUser(Object.fromEntries(formData.entries()));

    await mutateUser(jsonUserData);
    e.preventDefault();
  };

  const toDatabaseUser = (formData) => {
    return {
      username: formData.username,
      password: formData.password,
      email: {
        address: formData.email,
      },
      profile: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: {
          street1: formData.address,
        },
      },
    };
  };

  return (
    <form name="userForm" method="post">
      <div className="flex gap-4 mb-6">
        <Input
          type="text"
          label="Username"
          name="username"
          required
          size="sm"
        />
        <Input
          type="password"
          label="Password"
          name="password"
          required
          size="sm"
        />
      </div>
      <div className="flex gap-4 mb-6">
        <Input
          type="text"
          label="First name"
          name="firstName"
          required
          size="sm"
        />
        <Input
          type="text"
          label="Last name"
          name="lastName"
          required
          size="sm"
        />
      </div>
      <div className="flex gap-4 mb-6">
        <Input type="email" name="email" label="Email" required size="sm" />
        <Input type="text" label="Address" name="address" required size="sm" />
      </div>
      <Button color="primary" type="submit" onClick={submitUserForm}>
        Create user
      </Button>
    </form>
  );
};

export default UserForm;
