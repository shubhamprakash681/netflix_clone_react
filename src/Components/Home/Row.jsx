import React from "react";
import Card from "./Card";

import "../styles/row.scss";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ tittle = "movie-name", allMovies }) => {
  // console.log(tittle, allMovies);

  return (
    <>
      <div className="row">
        <h2>{tittle}</h2>
        <div className="cards-container">
          {allMovies.map((item, index) => {
            return (
              <>
                {/* {console.log(item.poster_path)} */}
                <Card key={index} image={`${imgUrl}/${item.poster_path}`} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
