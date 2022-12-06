import { Fragment } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import youtubeLogo from "../assets/youtubeLogo.png";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const { darkMode, toggle } = useDarkMode();
  return (
    <Fragment>
      <nav className="navbar">
        <div className="flex items-center gap-5">
          <GiHamburgerMenu className="hamburger-menu" />
          <Link to="/">
            <img src={youtubeLogo} alt="logo" className="w-8" />
          </Link>
        </div>
        <input className="searchBar " />
        <div>
          {darkMode ? (
            <MdLightMode
              onClick={toggle}
              className="cursor-pointer text-yellow-500 hover:text-yellow-300 duration-300 ease-in-out text-2xl"
            />
          ) : (
            <MdDarkMode
              onClick={toggle}
              className="cursor-pointer text-neutral-600 text-2xl hover:text-neutral-900 duration-300 ease-in-out"
            />
          )}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
