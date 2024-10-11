import './Filter.css';
import React, { useEffect, useState } from 'react';
import { FetchGenre } from '../../data/FetchGenre';

const Filter = ({ movies, setMovies, movies2 }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedGenres = await FetchGenre();
        setGenres(fetchedGenres); 
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchData();
  }, []);

  const handleGenreChange = (genreName) => {
    const genreId = genres.find(genre => genre.name === genreName)?.id;

    if (genreId) {
      const filteredMovies = movies2.filter((movie) => {
        return movie.genre_ids.includes(genreId);
      });
      setMovies(filteredMovies);
    }
  };

  const handleSelectChange = (e) => {
    const genreName = e.target.value;
    setSelectedGenre(genreName);
    
    // Reset the movies to original list before applying filter
    setMovies(movies2);
    handleGenreChange(genreName);
  };

  return (
    <div>
      <select
        name="genres"
        id="genres"
        value={selectedGenre}
        onChange={handleSelectChange}
      >
        <option value="" disabled>Select a genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
