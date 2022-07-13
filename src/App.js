// import { useState, useEffect } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import Signup from "./components/Signup";
// import { auth } from "./fire";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Events from "./pages/Events";
import Songs from "./pages/Songs";
import Navbar from "./components/Navbar";
import ThemeSettings from "./components/ThemeSettings";
import { useStateContext } from "./contexts/ContextProvider";

import { Tooltip } from "@material-ui/core";
import { FiSettings } from "react-icons/fi";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    handleCloseSidebar,
    setCurrentColor,
    setCurrentMode,
  } = useStateContext();

  return (
    <div
    // className={currentMode === "Dark" ? "dark" : ""}
    // onClick={handleCloseSidebar}
    >
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed hidden right-4 bottom-4" style={{ zIndex: "1000" }}>
            <Tooltip title="Add" arrow>
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover: bg-light-gray"
                style={{ backgroundColor: "#fff", color: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </Tooltip>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div className="px-2 md:px-4">
              {themeSettings && <ThemeSettings />}

              <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/events" element={<Events />} />
                <Route path="/messages" element={<Songs />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
