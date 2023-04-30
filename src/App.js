import "./App.css";
import NavBar from "./components/navbar/NavBar";
import About from "./pages/abouts/Abouts";
import Contacts from "./pages/contacts/Contacts";
import Main from "./pages/main/Main";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Projects />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
