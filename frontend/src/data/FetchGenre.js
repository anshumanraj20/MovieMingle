import axios from 'axios';

export const FetchGenre = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/genre/movie/list',
    params: { language: 'en' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmQzNGJhZTUzMDY1ODYzNDk1NTA5ZDc4OGEzZmRkYiIsIm5iZiI6MTcyODYzNDcxMi45NTM0NjcsInN1YiI6IjY3MDhjNzBmOGQ0ODdmNjU0MTI4NjBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AxGqYJDLheckQk99PQcjU6Y96cVKjQ-DpnoFJ8FAyIo',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.genres || []; 
  } catch (error) {
    console.error('Error fetching genres:', error);
    return []; // Return an empty array on error
  }
};
