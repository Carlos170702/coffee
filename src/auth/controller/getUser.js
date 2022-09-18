import axios from "axios";

export const datos = async (datos) => {
  const { data } = await axios.post(
    "https://restserver-devjose.herokuapp.com/api/auth/login",
    datos
  );
  return data;
};

const data = () => {
  axios
    .post("https://restserver-devjose.herokuapp.com/api/users/postuser", {
      name:"carlos",
      email: "carloscruz1devdasdadas@gmail.com",
      password: "123456789",
      rol: "client"
    })
    .then((item) => {
      console.log("then");
    })
    .catch((err) => {
      console.log("catch");
      console.log(err.config);
    });
};


export default { data };
