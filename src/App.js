import "./App.css";
import { About } from "./Components/About";
import { Header } from "./Components/Header";
import { Projects } from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
