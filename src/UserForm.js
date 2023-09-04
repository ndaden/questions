import { Button, Checkbox, Input } from "@nextui-org/react";
import useMutateUser from "./hooks/useMutateUser";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors = {}, isValid },
    watch,
  } = useForm();
  const { mutateUser, isLoading, data: mutateUserResult } = useMutateUser();
  const [serverError, setServerError] = useState({});

  useEffect(() => {
    const getResult = async () => {
      const result = await mutateUserResult?.json();
      setServerError(result);
    };

    getResult();
  }, [mutateUserResult]);

  const submitUserForm = async (data) => {
    if (isValid) {
      const jsonUserData = toDatabaseUser(data);
      await mutateUser(jsonUserData);
    }
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
    <form name="userForm" onSubmit={handleSubmit(submitUserForm)}>
      <div className="flex gap-4 mb-6">
        <Input
          {...register("username", {
            required: { value: true, message: "Username is mandatory." },
            min: {
              value: 5,
              message: "Username must contain more than 5 characters.",
            },
            max: {
              value: 20,
              message: "Username must contain less than 20 characters.",
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Username format is invalid.",
            },
          })}
          type="text"
          label="Username"
          validationState={
            errors?.username || serverError?.username ? "invalid" : "valid"
          }
          errorMessage={
            errors?.username?.message || serverError?.username?.message
          }
          size="sm"
        />
        <Input
          type="password"
          label="Password"
          {...register("password", {
            required: { value: true, message: "Password is mandatory" },
          })}
          validationState={errors?.password ? "invalid" : "valid"}
          errorMessage={errors?.password?.message}
          size="sm"
        />
        <Input
          type="password"
          label="Password (again)"
          {...register("passwordAgain", {
            required: {
              value: true,
              message: "Type your password a second time.",
            },
            validate: (value) =>
              value === watch("password") || "Passwords don't match.",
          })}
          validationState={errors?.passwordAgain ? "invalid" : "valid"}
          errorMessage={errors?.passwordAgain?.message}
          size="sm"
        />
      </div>
      <div className="flex gap-4 mb-6">
        <Input
          type="text"
          label="First name"
          {...register("firstName", {
            required: { value: true, message: "First name is mandatory" },
          })}
          validationState={errors?.firstName ? "invalid" : "valid"}
          errorMessage={errors?.firstName?.message}
          size="sm"
        />
        <Input
          type="text"
          label="Last name"
          {...register("lastName", {
            required: { value: true, message: "Last name is mandatory" },
          })}
          validationState={errors?.lastName ? "invalid" : "valid"}
          errorMessage={errors?.lastName?.message}
          size="sm"
        />
      </div>
      <div className="flex gap-4 mb-6">
        <Input
          type="email"
          {...register("email", {
            required: { value: true, message: "Email is mandatory." },
            pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid." },
          })}
          label="Email"
          formNoValidate
          validationState={errors?.email ? "invalid" : "valid"}
          errorMessage={errors?.email?.message}
          size="sm"
        />
        <Input
          type="text"
          label="Address"
          {...register("address", {
            required: { value: true, message: "Address is mandatory" },
          })}
          validationState={errors?.address ? "invalid" : "valid"}
          errorMessage={errors?.address?.message}
          size="sm"
        />
      </div>
      <div className="gap-4 mb-6">
        <Checkbox {...register("owner")} value={"owner"} className="mr-3">
          Owner Account
        </Checkbox>
      </div>
      <Button color="primary" type="submit" disabled={isLoading}>
        Create user
      </Button>
    </form>
  );
};

export default UserForm;
