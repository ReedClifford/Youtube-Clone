import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="relative">
      <FaSearch className="text-neutral-700 absolute right-3 top-2 z-20" />
      <input className="searchBar" placeholder="Search" />
    </div>
  );
};
export default SearchBar;
