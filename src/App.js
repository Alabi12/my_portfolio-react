import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";

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
