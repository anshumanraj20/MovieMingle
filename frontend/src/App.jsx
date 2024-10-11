import Header from "./Components/Header/Header";
import { useState,useEffect } from "react";
import Movielist from "./Components/Movielist/Movielist";
import { FetchMovies } from "./data/FetchMovies";
const App = () => {
  const [fetchedMovies,setFetchedMovies] = useState([]);
  const [movies2,setMovies2] = useState([]);
  let temp = [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        temp =await FetchMovies()
        setFetchedMovies(temp);
        setMovies2(temp);
        // console.log(fetchedMovies); 
        
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    
    fetchData();
},[])

  return (
    <div>
      <Header movies = {fetchedMovies} setMovies = {setFetchedMovies} movies2 = {movies2}  />
      <Movielist movies = {fetchedMovies}/>
    </div>
  );
};

export default App;
