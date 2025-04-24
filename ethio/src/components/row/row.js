import React, { useEffect, useState, useRef } from "react";
import "./row.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import tmdbAPI from "../../utild/axios";
import fallbackImage from "../../asset/image.png"; // Path to your fallback image

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await tmdbAPI.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const handleScroll = (direction) => {
    const scrollAmount = rowRef.current.offsetWidth;
    if (direction === "left") {
      rowRef.current.scrollLeft -= scrollAmount;
    } else {
      rowRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__container">
        <button
          className="row__arrow row__arrow--left"
          onClick={() => handleScroll("left")}
        >
          <FiChevronLeft size={24} />
        </button>

        <div className="row__posters" ref={rowRef}>
          {movies.map((movie) => (
            <div key={movie.id} className="row__poster-wrapper">
              <img
                className={`row__poster ${
                  isLargeRow ? "row__poster--large" : ""
                }`}
                src={
                  movie[isLargeRow ? "poster_path" : "backdrop_path"]
                    ? `https://image.tmdb.org/t/p/w500${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                      }`
                    : fallbackImage
                }
                alt={movie.title || movie.name}
                loading="lazy"
              />
              <div className="row__poster-overlay">
                <h3>{movie.title || movie.name}</h3>
                <p>{movie.overview?.substring(0, 80)}...</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="row__arrow row__arrow--right"
          onClick={() => handleScroll("right")}
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Row;
