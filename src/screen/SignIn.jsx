import GoogleButton from "react-google-button"

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase-sdk/firebase";
import { useEffect } from "react";
import { useAuth } from "../Context/authContext";

export const SignIn=()=>
{
    

    
    const handleGoogleSignIn = () => {
        const provider= new GoogleAuthProvider();
        signInWithPopup(auth,provider);

      };
    
    
    return (
        <>
            <div className="w-12/12 h-screen flex justify-center items-center">
                <GoogleButton onClick={handleGoogleSignIn}/>
            </div>
        </>
    )
}