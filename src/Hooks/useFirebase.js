import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/LogIn/Firebase/Firebaseinit";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile } from "firebase/auth";


initializeFirebase();
const auth = getAuth();
const Googleprovider = new GoogleAuthProvider();

const useFirebase = ()=> {

      const [user,setuser] = useState({});
      const [isLoading, setIsLoading] = useState(true);
      const [error, seterror] = useState('');



      // sign up with email and password


      const registerUser = (email,password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const newUser = {email,displayName:name};
            setuser(newUser);
            // sent name to firebase 

            updateProfile(auth.currentUser, {
              displayName: name
            })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });



            seterror('');
            history.replace('/');
          })
          .catch((error) => {
            const errorCode = error.code;
            seterror(error.message);
            // ..
          })
          .finally((() => setIsLoading(false)))
      }

  
      // userSignOut

      const userSignOut = () => {
         setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally((() => setIsLoading(false)));
      }

     

            // Google Sign in 

            const signinwithgoogle = (location,history) => {
              setIsLoading(true)
             signInWithPopup(auth, Googleprovider)
             .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || '/';
                history.replace(destination);
                seterror('');            
             })
             .catch((error) => {
             const errorMessage = error.message;
             seterror(errorMessage);
             })
             .finally((() => setIsLoading(false)));
             }





   // Observe user

      useEffect(()=>{
     const unSubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setuser(user)
              
            } else {
                  setuser({})
            }
            setIsLoading(false);
          });
         
          return () => unSubcribe;

      },[])


     // Log In User  

       const userLogIn = (email, password,location,history)=> {
           
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const destination = location?.state?.from || '/';
            history.replace(destination);
            seterror('');
          })
          .catch((error) => {
            seterror(error.message);
          })
          .finally((() => setIsLoading(false)))
       }





      return {
          user,
          registerUser,
          userSignOut,
          userLogIn,
          isLoading,
          error,
          signinwithgoogle

      }
}



export default useFirebase;