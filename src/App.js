import { useRef } from "react";
import "./App.css";
import { About } from "./Components/About";
import { Header } from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Header />
      <About />
      {/* <Skills />
      <Projects /> */}
    </>
  );
}

export default App;
