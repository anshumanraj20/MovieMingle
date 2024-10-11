import {FetchMovies} from '../../data/FetchMovies'
import MovieCard from '../MovieCard/MovieCard'
import {useEffect,useState} from 'react'
import './Movielist.css'
const Movielist = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies=async()=>{
      const movies=await FetchMovies()
      console.log(movies)
      setMovies(movies)
    }
    getMovies()
  }, []);
  if(!movies) return (<></>)
  return (
    <div id='movie-list' >{
      movies.map((movie)=>{
        return( <MovieCard poster_path={movie.poster_path} original_title={movie.original_title} key={movie.id} />)
      })
    }
    </div>
  )
}

export default Movielist