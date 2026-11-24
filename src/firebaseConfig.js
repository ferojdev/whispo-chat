import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDTCUykxL9y1TK1Ot2qctQXv5wfRXS0in4",
  authDomain: "whispo-chat-817de.firebaseapp.com",
  projectId: "whispo-chat-817de",
  storageBucket: "whispo-chat-817de.firebasestorage.app",
  messagingSenderId: "780874856227",
  appId: "1:780874856227:web:574e62b3c8fa4e82ee7e96",
  measurementId: "G-32LBYG4M4K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig
