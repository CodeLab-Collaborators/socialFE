import { atom } from "recoil";
// import { recoilPersist } from "recoil-persist";
import { NewUsers } from "../types";

// const { persistAtom } = recoilPersist();

export const ReadNewUsers = atom({
  key: "New Users",
  default: {} as NewUsers,
  //   effects_UNSTABLE: [persistAtom],
});
