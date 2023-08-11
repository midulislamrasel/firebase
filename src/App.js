import "./App.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase/firebase.init";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});

  const handelGoogleSingIn = () => {
    // console.log("Have a good day");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        // console.error("error: ", error);
      });

    // Sing out
  };

  const handleSingout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };

  return (
    <div className="App">
      {user.email ? (
        <button onClick={handleSingout}>SING OUT</button>
      ) : (
        <button onClick={handelGoogleSingIn}>Google Authentication</button>
      )}

      {user.email && (
        <div className="profile">
          <img src={user.photoURL} alt="img"></img>
          <div className="userInfo">
            <p>User Name : {user.displayName}</p>
            <p>Emaril: {user.email}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
