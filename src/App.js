import "./App.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import app from "./firebase.init";
import { useState } from "react";
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const handlePopUpSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log("error", error);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log("error is ", error);
      });
  };
  const handleFaceBookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        setUser({});
        console.log(error);
      });
  };
  return (
    <div className="App">
      <div style={{ height: "150px" }}></div>
      {/* checking if the user is or isn't signed in */}
      {user.uid ? (
        <button onClick={handleSignOut}>SignOut</button>
      ) : (
        <div>
          <button onClick={handlePopUpSignIn}>Pop up</button>
          <button onClick={handleGithubSignIn}>Github SignIn</button>
          <button onClick={handleFaceBookSignIn}>Facebook SignIn</button>
        </div>
      )}

      <p>
        {Object.keys(user).length === 0
          ? "আপনি কে তা জানতে উপরের বোতাম টিপুন!!! "
          : user.email
          ? `তোমার ইমেইল ${user.email}`
          : `তোমার নাম ${user.displayName}`}
      </p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
