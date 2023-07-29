import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import cover from "../../../assets/9.jpeg";
import { loadState } from "../../../utils/StateAPI";
import { getUser } from "../../../global/globalState";
import { useEffect } from "react";

const UserInfo = () => {
  const user = useSelector((state: any) => state.viewUserDetails);
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.user.encrypt);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (token) {
        const user: any = jwt_decode(token);
        loadState(user?.id, "get-one").then((res) => {
          dispatch(getUser(res.data.data));
        });
      } else {
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(`error getting user`, error);
    }
  }, [token]);

  // console.log(`this is user`, user);

  return (
    <div
      className="relative h-[23vh] bg-orange-300 w-full"
      style={{ backgroundImage: `url(${cover})` }}
    >
      {/* cover image */}
      <div className="absolute inset-[120px] left-4 w-[92%] h-full flex gap-3 justify-between items-center ">
        <div className="w-[60%] h-full ">
          {/* profile pic */}
          <div className="w-[90px] text-xs h-[90px] flex items-center justify-center bg-orange-500 border-[4px] border-white rounded-full">
            <img src="" alt={user?.userName} />
          </div>
          {/* display name */}
          <p className=" pt-1 text-[19px] font-bold ">{user.fullName}</p>
          {/* username */}
          <span className="lowercase text-gray-500 text-[13px]">
            @{user?.userName}
          </span>
        </div>
        <div className="w-full h-full  flex items-center justify-end">
          <Link to="/profile-page/account-update">
            <button
              type="submit"
              className="mt-4 py-2 text-xs rounded-full px-3 border border-gray-500 font-medium"
            >
              Edit profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
