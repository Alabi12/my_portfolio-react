import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
