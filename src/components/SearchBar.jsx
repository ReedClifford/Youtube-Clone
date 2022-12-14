import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useYoutubeData from "../hooks/useYoutubeData";
const SearchBar = () => {
  const { setInput } = useYoutubeData();
  const [search, setSearch] = useState("");
  const onTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    setInput(search);
    navigate("/");
    onTop();
  };
  return (
    <div className="relative">
      <form onSubmit={onSubmit}>
        <FaSearch className="text-neutral-700 absolute right-3 top-2 z-20" />
        <input
          className="searchBar"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
};
export default SearchBar;
