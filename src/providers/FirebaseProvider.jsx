import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider(null)
const githubProvider = new GithubAuthProvider(null)
const twitterProvider = new TwitterAuthProvider(null)

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user);
            setLoading(false);
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    console.log(user)

    const registerUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    const googleLogIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    const twitterLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, twitterProvider)
    }
   

    const authInfo = {
        user,
        registerUser,
        loginUser,
        logOut,
        googleLogIn,
        githubLogIn,
        twitterLogIn,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;