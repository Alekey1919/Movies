import React from "react";
import notAvailable from "./not-available.png";

const TMDB_IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/w500/";

const TMDBImage = ({ src, alt }) => (
  <img src={src ? `${TMDB_IMAGE_BASE_PATH}${src}` : notAvailable} alt={alt} />
);

export default TMDBImage;
