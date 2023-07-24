import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CreateUserParams } from "../types";

const { persistAtom } = recoilPersist();

export const createUserState = atom({
  key: "New Users",
  default: {} as Omit<CreateUserParams, "password">,
  effects_UNSTABLE: [persistAtom],
});
