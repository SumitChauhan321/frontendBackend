import React, { useEffect, useState } from "react";
import "../styles/MovieGallery.css";
const MovieGallery = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const Images = async () => {
    try {
      setLoading(true);
      
      const response = await fetch(
        `https://imdb.iamidiotareyoutoo.com/search?q=${search}`
      );

      const data = await response.json();

      setMovies(data.description || []);
      console.log(data.description);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    Images();
  }, [search]);

  return (
    <div style={{ padding: "0px", textAlign: "center",marginTop:"10px" }}>
      <h1>
        Movie Search App
      </h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={Images}
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <h2>
          Loading...
        </h2>
      ) : (
        <div className="movie-gallery">
          {movies.map((movie) => (
            <div
              key={movie["#IMDB_ID"]}
            >
              {/* Poster */}
              <img
                src={movie["#IMG_POSTER"]}
                alt={movie["#TITLE"]}
                height="300px"
                width="200px"
              />

              {/* Movie Info */}
              <div>
                <h2>
                  {movie["#TITLE"]}
                </h2>

                <p>
                  <span>Year:</span>
                  {movie["#YEAR"]}
                </p>

                <p>
                  <span>Actors:</span>{" "}
                  {movie["#ACTORS"]}
                </p>

                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieGallery;