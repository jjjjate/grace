import React from "react";
import {Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Home from "./pages/Home";
import {AuthContextProvider} from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        auth & context
      </h1>
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
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
