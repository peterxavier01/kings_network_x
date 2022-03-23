/* eslint-disable default-case */
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Signup from "./components/Signup";
import { auth } from "./fire";

import Sidebar from "./components/Sidebar";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Songs from "./pages/Songs";

function App() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const navigate = useNavigate();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  // const handleLogin = () => {
  //   clearErrors();
  //   signInWithEmailAndPassword(auth, email, password).catch((err) => {
  //     switch (err.code) {
  //       case "auth/invalid-email":
  //       case "auth/user-disabled":
  //       case "auth/user-not-found":
  //         setEmailError(err.message);
  //         break;
  //       case "auth/wrong-password":
  //         setPasswordError(err.message);
  //         break;
  //     }
  //   });
  // };

  const handleLogin = async () => {
    try {
      clearErrors();
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      console.log(user);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(error.message);
          break;
        case "auth/wrong-password":
          setPasswordError(error.message);
          break;
      }
    }
  };

  // const handleSignup = () => {
  //   clearErrors();
  //   createUserWithEmailAndPassword(auth, email, password).catch((error) => {
  //     switch (error.code) {
  //       case "auth/email-already-in-use":
  //       case "auth/invalid-email":
  //         setEmailError(error.message);
  //         break;
  //       case "auth/weak-password":
  //         setPasswordError(error.message);
  //         break;
  //     }
  //   });
  // };

  const handleSignup = async () => {
    try {
      clearErrors();
      const user = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
      console.log(user);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
      }
    }
  };

  // const handleLogout = () => {
  //   signOut(auth);
  // };

  const handleLogout = async () => {
    await signOut(auth);
  };

  // const authListener = () => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       clearInputs();
  //       setUser(user);
  //     } else {
  //       setUser("");
  //     }
  //   });
  // };

  const authListener = () => {
    onAuthStateChanged(auth, (currentUser) => {
      clearInputs();
      setUser(currentUser);
    });
  };

  useEffect(() => {
    authListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Sidebar>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/events" element={ <Events/> }/>
          <Route path="/songs" element={ <Songs/> }/>
          <Route path="*" element={ <h1>Page Not Found</h1> }/>
        </Routes>
      </Sidebar>
    </div>
  );

  // return (
  //   <div className="App">
  //     {user ?
  //         <Notifications />
  //      :
  //       <Signup
  //         email={email}
  //         setEmail={setEmail}
  //         password={password}
  //         setPassword={setPassword}
  //         handleLogin={handleLogin}
  //         handleSignup={handleSignup}
  //         hasAccount={hasAccount}
  //         setHasAccount={setHasAccount}
  //         emailError={emailError}
  //         passwordError={passwordError}
  //       />
  //     }
  //   </div>
  // );

}

export default App;
