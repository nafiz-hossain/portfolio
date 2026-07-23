import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import CompilationSection from "./components/CompilationSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  width: 100%;
  overflow-x: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false); // default: Paper (light)
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Body>
        <CompilationSection />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
        <Reveal>
          <Footer />
        </Reveal>
        {openModal.state && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </Body>
      <ToastContainer position="bottom-center" autoClose={4000} newestOnTop />
    </ThemeProvider>
  );
}

export default App;
