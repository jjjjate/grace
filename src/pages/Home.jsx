import React from "react";
import Sliders from "../components/homes/Sliders";
import Cards from "../components/homes/Cards";
import Middle from "../components/homes/Middle";
import MainVideo from "../components/homes/MainVideo";
import Notice from '../components/homes/Notice';

const Home = () => {
  return (
    <>
      <Sliders />
      <Cards />
      <Middle />
      <MainVideo />
      <Notice />
    </>
  )
}

export default Home;