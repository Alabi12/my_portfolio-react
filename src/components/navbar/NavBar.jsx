import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <>
      <div id="navbar" className="flex big-white">
        <div className="logo">
          <Link to="/">My Portfolio</Link>
        </div>
        <div>
          <nav>
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
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
