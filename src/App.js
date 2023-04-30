import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/home/Home";
import Abouts from "./pages/abouts/Abouts";
import Contacts from "./pages/contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={Abouts} />
        <Route path="/contact" component={Contacts} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
