import axios from "axios";

const url = "https://social-connect-797u.onrender.com/api/social/auth";

export const loadState = async (id: any, path: string) => {
  return await axios.get(`${url}/${id}/${path}`);
};
