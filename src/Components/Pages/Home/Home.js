import React from "react";
import Slider from "../../shared/Header/Slider/Slider";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Slider />
      <Services />
      <MakeAppointment/>
    </>
  );
};

export default Home;
