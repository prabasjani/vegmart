import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar bg-success-subtle py-2">
      <div className="container d-flex align-items-center justify-content-between">
        <a
          className="navbar-brand fw-bold fs-4 border border-3 border-dark"
          href="#"
        >
          <span className="bg-success text-light px-2 py-1 ms-1">VEG</span>{" "}
          <span className="me-2">Mart</span>
        </a>
        <div className="d-flex">
          <Link to="/" className="nav-link mx-4 fs-5">
            Shop
          </Link>
          <Link to="/cart" className="nav-link fs-5  position-relative">
            <IoCartOutline width={125} height={125} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {/* 10 */}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
