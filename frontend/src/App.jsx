import Header from "./Components/Header/Header";
import { useState } from "react";
import Movielist from "./Components/Movielist/Movielist";
const App = () => {
  return (
    <div>
      <Header />
      <Movielist/>
    </div>
  );
};

export default App;
