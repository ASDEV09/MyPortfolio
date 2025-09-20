import { useState, useEffect } from "react";

function Navbar() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [color, setColor] = useState(false); // camelCase better hai

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // Top par hamesha dikhani hai
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        // Scroll down → hide
        setShowNavbar(false);
      } else {
        // Scroll up → show
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {showNavbar && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" href="#contact">Contact</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" href="#MyProjects">My Projects</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" href="#TechnologyExperties">Technology Experties</a>
              </li>
            </ul>
          </div>
        </nav>
      )}
 <h1 className={`${color ? "red" : "blue"} mt-5`}>Heading 1</h1>
<h1 className={color ? "red" : "blue"}>Heading 2</h1>
<h1 className={color ? "red" : "blue"}>Heading 3</h1>

<button className="my" onClick={() => setColor(!color)}>asd</button>

    </>
  );
}

export default Navbar;
