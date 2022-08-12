import React from "react";
import { SignUpForm } from "../components/index.js";
import { BsGoogle } from "react-icons/bs";
import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../utils/firebase.config.js";


const Login = () => {
   //Google Sign In function
   const googleSignIn = async () => {
      const { user } = await signInWithGooglePopUp();
      console.log("user", user); //! Remove this log at later stage
      const userDocRef = await createUserDocumentFromAuth(user);
   };

   return (
      <div className="p-6 w-screen h-[80vh]">
         <div className="flex items-center justify-around">
            <button
               className="border border-black p-2 hover:bg-black hover:text-white text-lg flex items-center gap-3 hover:scale-105 duration-150"
               onClick={googleSignIn}
            >
               <BsGoogle size={22} />
               SIGN IN
            </button>
            <SignUpForm />
         </div>
      </div>
   );
};

export default Login;