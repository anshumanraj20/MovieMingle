import "./Header.css";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import logo from "../../utils/photos/th.jpg";
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <div id="search-box">
        <Search />
      
       <Filter />
       </div>
    </header>
  );
};

export default Header;
