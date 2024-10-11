import React, { useState } from 'react';
import './Search.css';

const Search = ({movies,setMovies,movies2}) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);

  const restoreMovies=()=>{
    setMovies(movies2)
  }
  const handleInputChange = (e) => {
    restoreMovies()
    setQuery(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const handleSearch = () => {
    
    try {
      console.log(movies);
      const filteredResults = movies.filter((item) => {
        return (item.original_title.toLowerCase().includes(query.trim().toLowerCase()));
      });
      setMovies(filteredResults);
      // console.log("Filtered results:", filteredResults);
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
      {/* <ul>
        {result.map((data, id) => (
          <li key={id}>{data.original_title}</li>
        ))}
      </ul> */}
    </>
  );
};

export default Search;
