import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/Logo 1.png";
import { Link, NavLink } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";
import { Dropdown } from "react-bootstrap";
function NavbarX() {
  const { signOut } = useFirebase();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  
  const handleSignOut = () => {
    signOut()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand to="/">
          <img src={logo} alt="" width={120} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink
              to="/"
              className="px-3 text-decoration-none text-dark fw-bold"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="px-3 text-decoration-none text-dark fw-bold"
            >
              About
            </NavLink>
            <NavLink
              to="/shop"
              className="px-3 text-decoration-none text-dark fw-bold"
            >
              Shop
            </NavLink>
            <NavLink
              to="/blog"
              className="px-3 text-decoration-none text-dark fw-bold"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="px-3 text-decoration-none text-dark fw-bold"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <div>
          <ul className="navicon p-0 mb-0 ">
            <li className="nav_icon">
              <a to="#">
                <i className="bi bi-search text-decoration-none"></i>
              </a>
            </li>

            <li className="nav_icon navbtn icon-hover">
              <button
                type="button"
                className="btn position-relative navicon shadow-none p-0"
              >
                <Link to="/cart">
                  <i className="bi bi-handbag text-decoration-none"></i>
                  <span className="position-absolute top-100 start-100 translate-middle px-1 bg-danger rounded-circle text-white">
                    3<span className="visually-hidden">New alerts</span>
                  </span>
                </Link>
              </button>
            </li>
            <li className="nav_icon icon-hover">
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <i className="bi bi-gear text-decoration-none"></i>
                </Dropdown.Toggle>

                {currentUser ? (
                  <Dropdown.Menu>
                    <Dropdown.Item href="#action">
                      {currentUser.user.email}
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/login" onClick={handleSignOut}>
                        Logout
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                ) : (
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      {" "}
                      <Link to="/login">Login</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                )}
              </Dropdown>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarX;
