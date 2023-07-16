import axios from "axios";

const URl = "https://social-connect-797u.onrender.com";

export const createUser = async ({ name, email, username, password }: any) => {
  return await axios
    .post(`${URl}/api/social/user/create`, {
      name,
      email,
      password,
      username,
    })
    .then((res) => {
      return res.data;
    });
};
