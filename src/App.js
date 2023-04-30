import "./App.css";
import NavBar from "./components/navbar/NavBar";
import About from "./pages/abouts/Abouts";
import Main from "./pages/main/Main";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Projects />
      <About />
    </div>
  );
}

export default App;
