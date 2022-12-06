import { Fragment } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import youtubeLogo from "../assets/youtubeLogo.png";
import SearchBar from "../components/SearchBar";
import BurgerMenuContents from "../components/sidebar/BurgerMenuContents";
import useToggle from "../hooks/useToggles";

const Navbar = () => {
  const { darkMode, toggleDarkMode, toggleBurgerMenu, activeHamburger } =
    useToggle();

  return (
    <Fragment>
      <nav className="navbar">
        <div className="flex items-center gap-3">
          <div className="hamburgerContainer">
            <GiHamburgerMenu
              className="hamburger-menu"
              onClick={toggleBurgerMenu}
            />
          </div>
          <Link to="/">
            <img src={youtubeLogo} alt="logo" className="w-10" />
          </Link>
        </div>

        <div>
          <SearchBar />
        </div>
        <div>
          {darkMode ? (
            <MdLightMode onClick={toggleDarkMode} className="toggleLightMode" />
          ) : (
            <MdDarkMode onClick={toggleDarkMode} className="toggleDarkMode" />
          )}
        </div>
      </nav>
      {activeHamburger ? <BurgerMenuContents /> : null}

      <Outlet />
    </Fragment>
  );
};

export default Navbar;
