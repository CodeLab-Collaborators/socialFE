import { useEffect } from 'react'
import { loadState } from '../utils/StateAPI'

export const useReload = () => {

    useEffect(() => {
        loadState().then(() => {
            console.log("loaded")
        }).catch(err => {
            console.log(err)
        })
    })

}

