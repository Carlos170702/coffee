// import axios from "axios";

export const datos = async (email, password) => {
  let _datos = {
    email,
    password,
  };

  const response = await fetch(
    "https://restserver-devjose.herokuapp.com/api/auth/login",
    {
      method: "POST",
      body: JSON.stringify(_datos),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  );
  const { token } = await response.json();

  return {
    token,
    response,
  };
};
