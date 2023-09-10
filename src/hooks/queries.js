const getUsersQuery = async () =>
  (await fetch("http://localhost:3001/user")).json();

const createUserQuery = async (formData) =>
  await fetch("http://localhost:3001/user/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

const deleteUserQuery = async (id) =>
  await fetch(`http://localhost:3001/user/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

const getBusinessesQuery = async () =>
  (await fetch("http://localhost:3001/business")).json();

const getServicesQuery = async () =>
  (await fetch("http://localhost:3001/service")).json();

const getAppointmentsQuery = async () =>
  (await fetch("http://localhost:3001/appointment")).json();

export {
  getUsersQuery,
  createUserQuery,
  deleteUserQuery,
  getBusinessesQuery,
  getServicesQuery,
  getAppointmentsQuery,
};
