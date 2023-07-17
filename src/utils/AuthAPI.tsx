import axios, { AxiosResponse } from 'axios'
import { iData } from '../components/common/desktopLayout/auth/RegisterScreen'

const URL = "https://social-connect-797u.onrender.com/api/social/auth"

export const createAccount = async (data: iData) => {
    try {
        return await axios.post(`${URL}/create`, data).then((res) => {
            return res
        }).catch(err => {
            console.log(err)
        })

    } catch (error) {
        console.log(error)
    }
}

export const signIncreateAccount = async (data: iData) => {
    try {
        return await axios.post(`${URL}/create`, data).then((res) => {
            return res
        }).catch(err => {
            console.log(err)
        })

    } catch (error) {
        console.log(error)
    }
}

export const verifyAccount = async (id: string, token: string) => {
    try {
        return await axios.get(`${URL}/${id}/${token}/verify`).then((res) => {
            return res
        }).catch(err => {
            console.log(err)
        })

    } catch (error) {
        console.log(error)
    }
}