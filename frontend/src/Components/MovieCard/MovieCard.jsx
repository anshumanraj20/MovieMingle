import './MovieCard.css'
const MovieCard = ({original_title,poster_path}) => {
    const baseURI='https://image.tmdb.org/t/p/w500/'
  return (
    <div className='movie-card'>
        <img src={`${baseURI}${poster_path}`} alt="movieImage" />
        <h2>{original_title}</h2>
    </div>
  );
}

export default MovieCard;
