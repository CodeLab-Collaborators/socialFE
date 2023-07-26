import { AtomEffect, atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CreateUserParams } from "../utils/types";

const persistAtom: AtomEffect<any> = recoilPersist()

const defaultState = { id: "" } || null

export const userEntry = atom<{ id: string } | null>({
    key: "userEntry",
    default: defaultState,
    effects_UNSTABLE: [persistAtom],
});
