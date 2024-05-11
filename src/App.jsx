import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import AmazingClients from "./Components/AmazingClients";
import Numbers from "./Components/Numbers";
import GetinTouch from "./Components/GetinTouch";
import Footer from "./Components/Footer";
import License from "./Components/License";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero/>
      <AboutUs/>
      <Services/>
      <AmazingClients/>
      <Numbers/>
      <GetinTouch/>
      <Footer/>
      <License/>
    </>
  );
}

export default App;
