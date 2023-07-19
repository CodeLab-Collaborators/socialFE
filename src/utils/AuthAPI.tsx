import axios from "axios";
import { iData } from "../pages/desktop/auth/RegisterScreen";
import { CreateUserParams } from "./types";

const URL = "https://social-connect-797u.onrender.com/api/social/auth";
const URL2 = "https://localhost:5544/api/with-google/google-auth";

export const createAccount = async (data: iData) => {
  try {
    return await axios
      .post(`${URL}/create`, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

// api for mobile created this because of the tied types
export const createAccountMobile = async (data: CreateUserParams) => {
  try {
    return await axios
      .post(`${URL}/create`, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

export const signIncreateAccount = async (data: iData) => {
  try {
    return await axios.post(`${URL}/signin`, data).then((res) => {
      // console.log(res)
      return res;
    });
  } catch (error) {
    return error;
    // console.log(error)
  }
};

export const verifyAccount = async (id: string, token: string) => {
  try {
    return await axios
      .get(`${URL}/${id}/${token}/verify`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

export const GoogleAuth = async () => {
  try {
    return await axios.get(`${URL2}`);
  } catch (error) {
    console.log(error);
  }
};
