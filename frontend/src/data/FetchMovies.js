import axios from 'axios';

export const FetchMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      with_genres: '28,12',
    },
    headers: {
      accept: "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmQzNGJhZTUzMDY1ODYzNDk1NTA5ZDc4OGEzZmRkYiIsIm5iZiI6MTcyODYzNDcxMi45NTM0NjcsInN1YiI6IjY3MDhjNzBmOGQ0ODdmNjU0MTI4NjBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AxGqYJDLheckQk99PQcjU6Y96cVKjQ-DpnoFJ8FAyIo',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
