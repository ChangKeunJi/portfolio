import React from "react";
import Main from "./components/Main";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Nav from "./utils/Nav";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Main />
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default App;
