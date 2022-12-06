import { FaGraduationCap } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { ImNewspaper } from "react-icons/im";
import { IoGameControllerSharp, IoMusicalNotesSharp } from "react-icons/io5";
import { MdMovie, MdOutlineBookmark, MdSportsVolleyball } from "react-icons/md";
import { SiStylelint } from "react-icons/si";

import youtubeLogo from "../../assets/youtubeLogo.png";
import useToggle from "../../hooks/useToggles";
import SideBarLinks from "./SideBarLinks";

const BurgerMenuContents = () => {
  const { toggleBurgerMenu } = useToggle();

  return (
    <section>
      <div className="bluredBackground" onClick={toggleBurgerMenu}></div>

      <aside className="sideBar">
        <div className="togglerContainer">
          <div className="hamburgerContainer">
            <GiHamburgerMenu
              className="hamburger-menu"
              onClick={toggleBurgerMenu}
            />
          </div>

          <div className="flex items-center gap-2">
            <img
              src={youtubeLogo}
              alt="logo"
              className="w-10"
              onClick={toggleBurgerMenu}
            />
            <span className="font-semibold">Youtube </span>
          </div>
        </div>
        <div className="sideBarLinksContainer">
          <SideBarLinks to="/" onClick={toggleBurgerMenu}>
            <HiHome />
            <h3>Home</h3>
          </SideBarLinks>

          <SideBarLinks to="/coding" onClick={toggleBurgerMenu}>
            <MdOutlineBookmark />
            <h3>Coding</h3>
          </SideBarLinks>
          <SideBarLinks to="/dota" onClick={toggleBurgerMenu}>
            <MdOutlineBookmark />
            <h3>Dota</h3>
          </SideBarLinks>
          <SideBarLinks to="/tof" onClick={toggleBurgerMenu}>
            <MdOutlineBookmark />
            <h3>Tower of Fantasy</h3>
          </SideBarLinks>
          <SideBarLinks to="/anime" onClick={toggleBurgerMenu}>
            <MdOutlineBookmark />
            <h3>Anime</h3>
          </SideBarLinks>
        </div>

        <div className="sideBarExploreContainer">
          <div className="w-full mb-3">
            <h1 className=" text-neutral-800 dark:text-neutral-300">Explore</h1>
          </div>

          <SideBarLinks to="/education" onClick={toggleBurgerMenu}>
            <FaGraduationCap />
            <h3>Education</h3>
          </SideBarLinks>

          <SideBarLinks to="/music" onClick={toggleBurgerMenu}>
            <IoMusicalNotesSharp />
            <h3>Music</h3>
          </SideBarLinks>

          <SideBarLinks to="/gaming" onClick={toggleBurgerMenu}>
            <IoGameControllerSharp />
            <h3>Gaming</h3>
          </SideBarLinks>

          <SideBarLinks to="/sports" onClick={toggleBurgerMenu}>
            <MdSportsVolleyball />
            <h3>Sports</h3>
          </SideBarLinks>

          <SideBarLinks to="/movies" onClick={toggleBurgerMenu}>
            <MdMovie />
            <h3>Movies</h3>
          </SideBarLinks>
          <SideBarLinks to="/news" onClick={toggleBurgerMenu}>
            <ImNewspaper />
            <h3>News</h3>
          </SideBarLinks>

          <SideBarLinks to="/fashion" onClick={toggleBurgerMenu}>
            <SiStylelint />
            <h3>Fashion</h3>
          </SideBarLinks>
        </div>
        <div className="sideBarFooter">
          <p className="text-neutral-900 dark:text-neutral-400">
            Copyright ©2022
          </p>
          <p className="text-neutral-900 dark:text-neutral-400">
            Youtube Clone by Reed
          </p>
        </div>
      </aside>
    </section>
  );
};
export default BurgerMenuContents;
