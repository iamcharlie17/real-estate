import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider(null)
const githubProvider = new GithubAuthProvider(null)
const twitterProvider = new TwitterAuthProvider(null)

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user);
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    console.log(user)

    const registerUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    const googleLogIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogIn = ()=>{
        return signInWithPopup(auth, githubProvider);
    }
    const twitterLogIn = () =>{
        return signInWithPopup(auth, twitterProvider)
    }
   

    const authInfo = {
        user,
        registerUser,
        loginUser,
        logOut,
        googleLogIn,
        githubLogIn,
        twitterLogIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;