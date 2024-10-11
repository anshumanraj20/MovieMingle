import React, { useEffect, useState } from 'react';
import { FetchGenre } from '../../data/FetchGenre';

const Filter = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedGenres = await FetchGenre();
        console.log(fetchedGenres);
        setGenres(fetchedGenres); 
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchData();
  }, []);

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <div>
      <select
        name="genres"
        id="genres"
        value={selectedGenre}
        onChange={handleGenreChange}
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
