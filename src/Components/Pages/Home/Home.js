import React from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Slider from "../../shared/Header/Slider/Slider";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Slider />
      <Services />
      <MakeAppointment />
    </>
  );
};

export default Home;
