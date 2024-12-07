import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password) =>{
        setLoading(true)
        setUser(user)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // google sign in
    const googleSignin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // observer
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscriber()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        loading,
        googleSignin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;