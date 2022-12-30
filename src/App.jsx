import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Videos from "./pages/Videos";
import MorningVideos from "./pages/MorningVideos";
import AfternoonVideos from "./pages/AfternoonVideos";
import WednesdayVideos from "./pages/WednesdayVideos";
import FridayVideos from "./pages/FrideyVideos";
import Footer from './components/Footer';
import Service from './pages/Service';
import AboutVision from './pages/AboutVision';
import AboutWelcome from './pages/AboutWelcome';
import AboutPeople from './pages/AboutPeople';
import AboutYears from './pages/AboutYears';
import AboutWay from './pages/AboutWay';

const App = () => {
  return (
    <>
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
          <Route path="/video/morning" element={<MorningVideos />} />
          <Route path="/video/afternoon" element={<AfternoonVideos />} />
          <Route path="/video/wednesday" element={<WednesdayVideos />} />
          <Route path="/video/friday" element={<FridayVideos />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about/vision" element={<AboutVision />} />
          <Route path="/about/welcome" element={<AboutWelcome />} />
          <Route path="/about/people" element={<AboutPeople />} />
          <Route path="/about/years" element={<AboutYears />} />
          <Route path="/about/way" element={<AboutWay />} />
        </Routes>
      </AuthContextProvider>
      <Footer />
    </>
  );
}

export default App;
