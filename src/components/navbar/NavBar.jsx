import { Link } from "react-router-dom";
import "./navbar.css";

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});

function NavBar() {
  return (
    <>
      <nav id="navbar" className="flex big-white">
        <div className="logo">
          <Link to="/">My Portfolio</Link>
        </div>
        <div>
          <ul className="group-links">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/project">Projects</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
