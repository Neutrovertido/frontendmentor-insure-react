import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Information from "./components/Information";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Intro />
        <Information />
      </main>
      <Footer />
    </div>
  );
};

export default App;