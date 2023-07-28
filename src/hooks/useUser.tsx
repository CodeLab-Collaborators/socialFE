import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { getUser } from "../global/globalState";
import { loadState } from "../utils/StateAPI";

export const useUser = () => {
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.user.encrypt);
  const dispatch = useDispatch();

  try {
    if (token) {
      const user: any = jwt_decode(token);
      loadState(user?.id, "get-one").then((res) => {
        dispatch(getUser(res.data.data));
        console.log(`this is user`, res.data.data);
      });
    } else {
      navigate("/sign-in");
    }
  } catch (error) {
    console.error("Error decoding token:", error);
  }
};
