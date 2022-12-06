import { NavLink } from "react-router-dom";
const SideBarLinks = ({ children, ...rest }) => {
  return (
    <NavLink {...rest} className="sideBarLink">
      {children}
    </NavLink>
  );
};
export default SideBarLinks;
