import Header from "./Components/Header/Header";
import { useState } from "react";
const App = () => {
  const [movies, setMovies] = useState([
    {
      name: "harry",
      genre: "action",
    },
    {
      name: "handa",
      genre: "action",
    },
    {
      name:'harry-2',
      genre:'pappy'
    }
  ]);
  return (
    <div>
      <Header movies={movies} />
    </div>
  );
};

export default App;
