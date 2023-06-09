import { initializeApp } from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore,doc,getDoc,setDoc } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDtj6ihE478x3Um6-wZmm6CbrwfKDUq3Ss",
    authDomain: "crwn-clothing-db-c0509.firebaseapp.com",
    projectId: "crwn-clothing-db-c0509",
    storageBucket: "crwn-clothing-db-c0509.appspot.com",
    messagingSenderId: "958003806641",
    appId: "1:958003806641:web:6b19d93f60fa2f4637fd90"
  };
    
  const firebaseapp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    if(!userSnapShot.exists()){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(userDocRef,{
          displayName,email,createdAt
        })
      } catch (error) {
        console.log(error.message);
      }
    }
    
    return userDocRef;
    
  }