import "./App.css";
import { About } from "./Components/About";
import { Header } from "./Components/Header";
import { Projects } from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import { ContactMe } from "./Components/ContactMe";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
