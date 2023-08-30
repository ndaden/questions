const getUsersQuery = async () =>
  (await fetch("http://localhost:3001/user")).json();

const createUserQuery = async (formData) =>
  (
    await fetch("http://localhost:3001/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  ).json;

const getBusinessesQuery = async () =>
  (await fetch("http://localhost:3001/business")).json();

const getServicesQuery = async () =>
  (await fetch("http://localhost:3001/service")).json();

const getAppointmentsQuery = async () =>
  (await fetch("http://localhost:3001/appointment")).json();

export {
  getUsersQuery,
  createUserQuery,
  getBusinessesQuery,
  getServicesQuery,
  getAppointmentsQuery,
};
