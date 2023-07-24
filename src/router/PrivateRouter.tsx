import { useRecoilValue } from "recoil"
import { userEntry } from "../global/userState"
import { Navigate } from "react-router-dom"
import { PropsWithChildren } from "react"
import { useSelector } from "react-redux"


const PrivateRouter: React.FC<PropsWithChildren> = ({ children }) => {
    const user = useSelector((state: any) => state.user)

    return (
        <div>
            {
                user ? <div>{children}</div> : <Navigate to="/sign-in" />
            }
        </div>
    )
}

export default PrivateRouter