import { useContext } from "react";
import { NavLink } from "react-router-dom";
import meetupLogo from "../assets/meetupLogo.png";
import SearchContext from "../context/SearchContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";
const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <header className="custom-header">
      <nav className="container-fluid px-4 py-2">
        <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
          {/* Logo */}
          <NavLink to="/" className="navbar-brand text-decoration-none m-0">
            <img
              src={meetupLogo}
              alt="Meetup Logo"
              className="meetup-logo"
              style={{
                height: "120px",
                width: "auto",
              }}
            />
          </NavLink>

          {/* Search Box */}
          <div className="search-container flex-grow-1">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search text-secondary"></i>
              </span>

              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search by title and tags"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
