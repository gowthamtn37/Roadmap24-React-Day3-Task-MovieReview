import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "./global";

export function Movieldetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, [id]);

  // const movie = movielist[id];
  const sty = { color: movie.rating > 8.5 ? "green" : "red" };
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="650px"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div className="movie-detail-container">
        <div className="align-spec">
          <h2 className="movie-name">{movie.name}</h2>

          <p className="movie-rating" style={sty}>
            ⭐{movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
      </div>

      <Button
        onClick={() => navigate(-1)}
        variant="contained"
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
    </div>
  );
}
