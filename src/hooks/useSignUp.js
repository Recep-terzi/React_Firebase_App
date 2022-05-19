import { useState } from "react";
import { auth } from "../firebase/config";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
    const [error,setError] = useState(null)
    const {dispatch} = useAuthContext()
    const signup = (email,password) => {
        setError(null)
        createUserWithEmailAndPassword(auth,email,password).then((res) => {
            dispatch({type:'SIGNUP',payload:res.user})
            
        }).catch((err) => {
            setError(err.message)
        })
    }
    return{error,signup}
}