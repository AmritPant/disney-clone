import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTAdHVv7zOhwh9fUtKmAirsI7wqK26fBg",
  authDomain: "disney-clone-918db.firebaseapp.com",
  projectId: "disney-clone-918db",
  storageBucket: "disney-clone-918db.appspot.com",
  messagingSenderId: "500502842719",
  appId: "1:500502842719:web:1134e9bb8d6e1b31317aea",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { provider, auth };
