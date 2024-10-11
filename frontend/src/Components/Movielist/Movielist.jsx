import MovieCard from '../MovieCard/MovieCard'

import './Movielist.css'
const Movielist = ({movies}) => {
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