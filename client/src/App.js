import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./styles/Globals.css";
import "./styles/Layout.css";
import "./styles/buttons.css";
import "./styles/Base.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import SpinnerComponent from "./components/SpinnerComponent";
import ScrollComponent from "./components/ScrollComponenet";

import ScrollToTop from "./hooks/useScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  return (
    <>
      <SpinnerComponent />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
      <ScrollComponent />
    </>
  );
};

export default App;
