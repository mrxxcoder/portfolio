import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
// import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Services /> */}
      <Projects />
      <Contact />
    </>
  );
}

export default App;
