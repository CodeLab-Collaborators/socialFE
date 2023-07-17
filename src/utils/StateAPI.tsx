import axios from "axios"


const url = "https://social-connect-797u.onrender.com"

export const loadState = async () => {
    return await axios.get(url)
}