import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Features from "./components/Features";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Pricing from "./components/Pricing";
import TryCard from "./components/TryCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Features />
      <Pricing />
      <TryCard />
      <Footer />
    </>
  );
}

export default App;
