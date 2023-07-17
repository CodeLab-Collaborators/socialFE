import axios from "axios";
import { CreateUserParams } from "../types";

const URl = "https://social-connect-797u.onrender.com";

interface CreateUserResponse {
  // Define the response type here
  // Modify this according to the actual response structure
  // Example: id: string;
}

export const createUser = async ({
  name,
  email,
  username,
  password,
}: CreateUserParams): Promise<CreateUserResponse> => {
  const response = await axios.post(`${URl}/api/social/user/create`, {
    name,
    email,
    password,
    username,
  });

  // Assuming the response data matches the CreateUserResponse type
  return response.data;
};
