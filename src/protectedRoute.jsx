import { useEffect } from "react";
import { useAuth } from "./Context/authContext"
import { SignIn } from "./screen/SignIn";

export const ProtectedRoute=({children})=>{
    const {User}=useAuth();
    useEffect(()=>{

    },[User])
    return (
        <>
            {
                !User?<SignIn/>:children
            }
        </>
    )
}