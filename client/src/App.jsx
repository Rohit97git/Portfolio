import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import api from "./api";

function App() {
  useEffect(() => {
    api
      .get("/api/messages")
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
