import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW7Yc_eidtO8rE7_m_Ym5ez2Z2hxzBWp8",
  authDomain: "chetan-e97fb.firebaseapp.com",
  projectId: "chetan-e97fb",
  storageBucket: "chetan-e97fb.appspot.com",
  messagingSenderId: "555065101685",
  appId: "1:555065101685:web:b4aa48fe9ccef7de95d73c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence);

export { auth, googleProvider };
export default app;



