import "./App.css";
import About from "./pages/About/About";
import Home from './pages/home/Home';
import Navbar from "./components/Navbar";
import Contacts from './pages/Contact/Contact'
import Projects from "./pages/projects/Projects";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
