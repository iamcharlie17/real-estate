
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCSsgpkObXurFvSLzYTMSAR8xEoXUXMV0s",
  authDomain: "real-state-assignment-9.firebaseapp.com",
  projectId: "real-state-assignment-9",
  storageBucket: "real-state-assignment-9.appspot.com",
  messagingSenderId: "138443721284",
  appId: "1:138443721284:web:32a7b920ffb3d287c54a11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
