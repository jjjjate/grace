import React from "react";
import {Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Home from "./pages/Home";
import {AuthContextProvider} from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Videos from "./pages/Videos";

function App() {
  return (
    <div>
      <Navbar />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={
            <ProtectedRoute>
            <Account />
            </ProtectedRoute>
          }
          />
          <Route path="/video" element={<Videos />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
