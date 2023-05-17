import React from "react";
import { Box } from "@mui/material";
import Front1 from "./components/front/Front1";
import "./App.css";
import Marketplace from "./components/marketplace/Marketplace";
import Discover from "./components/discover/Discover";
import Front2 from "./components/front/Front2";
import Marketplace1 from "./components/marketplace/Marketplace1";
import Engage from "./components/engage/Engage";
import Discover1 from "./components/discover/Discover1";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Front2 />
      <Marketplace1 />
      <Engage />
      <Discover1 />
      <Footer />
    </>
  );
}

export default App;
