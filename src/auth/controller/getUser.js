import axios from "axios";

export const datos = async (datos) => {
  const { data } = await axios.post(
    "https://restserver-devjose.herokuapp.com/api/auth/login",
    datos
  );
  return data;
};

const registered = async (datos) => {
  const data = await axios.post(
    "https://restserver-devjose.herokuapp.com/api/users/postuser",
    datos
  );
  return data;
};

export default { registered };
