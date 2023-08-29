import "./App.css";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Moviedata from "./movieData.json"
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="movies-container">
        {
          Moviedata.map((elem, id) => {
            return (
              <React.Fragment key={id}>
                <Movies
                  title={elem.Title}
                  year={elem.Year}
                  image={elem.Poster}
                />
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
