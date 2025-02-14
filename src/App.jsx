import "./App.css";


import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Experince from "./sections/Experince/Experince";
import Education from "./sections/Education/Education";

function App() {
  return (
    <>
      <Hero />
      <Education/>
      <Projects />
      <Experince/>
      <Skills/>
      <Contact/>
      <Footer/>

      

    </>
  );
}

export default App;
