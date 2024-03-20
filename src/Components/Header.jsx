import { CiFilter } from "react-icons/ci";
import { Link } from "react-router-dom";
import { headers } from "../data";
import { useContext, useState } from "react";
import { ShopContext } from "../ShopContext";
const Header = () => {
  const [activeItem, setActiveItem] = useState(0);
  const { setSearchItem } = useContext(ShopContext);
  return (
    <nav className="navbar py-2">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <div className="d-flex align-items-center">
          <span className="me-2">
            Filter <CiFilter width={125} height={125} />:
          </span>
          {headers.map((header, id) => {
            return (
              <Link
                to={header.linkTo}
                className={
                  activeItem === id
                    ? "nav-link fs-6 mx-1 px-3 py-2 active"
                    : "nav-link fs-6 px-3 py-2 mx-1"
                }
                key={id}
                onClick={() => setActiveItem(id)}
              >
                {header.title}
              </Link>
            );
          })}
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchItem(e.target.value)}
          />
          {/* <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
        </form>
      </div>
    </nav>
  );
};

export default Header;
