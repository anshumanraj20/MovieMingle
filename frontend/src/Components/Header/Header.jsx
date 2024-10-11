import "./Header.css";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import logo from "../../utils/photos/th.jpg";

const Header = ({movies,setMovies,movies2}) => {
  // console.log(movies)
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <div id="search-box">
        <Search movies = {movies} setMovies = {setMovies} movies2 = {movies2}/>
      
       <Filter movies = {movies} setMovies = {setMovies} movies2 = {movies2}/>
       </div>
    </header>
  );
};

export default Header;
