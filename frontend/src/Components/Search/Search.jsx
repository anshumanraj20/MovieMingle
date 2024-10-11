import React, { useState } from 'react';
import { FetchMovies } from '../../data/FetchMovies';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      const movies = await FetchMovies();
      const filteredResults = movies.filter((item) => {
        return item.original_title.toLowerCase().includes(query.trim().toLowerCase());
      });
  
      console.log("Filtered results:", filteredResults);
      setResult(filteredResults);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleEnter}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {result.map((data, id) => (
          <li key={id}>{data.original_title}</li>
        ))}
      </ul>
    </>
  );
};

export default Search;
