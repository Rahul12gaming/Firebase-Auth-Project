import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-sdk/firebase";

const AuthContext=createContext();

export const AuthContextProvider=({children})=>
{
  const [User,setUser]=useState({})
  
  useEffect(()=>{
    const subscribe=new onAuthStateChanged(auth,(currentUser)=>{
     
        console.log(currentUser);
        setUser(currentUser);
        
        
        
    })
},[])
console.log(User,'user');
  return (
    <AuthContext.Provider value={{User}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>{
  return useContext(AuthContext)
}