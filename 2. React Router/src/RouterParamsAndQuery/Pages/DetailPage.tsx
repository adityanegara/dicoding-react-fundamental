import { useState } from "react";
import MovieDetail from "../Components/MovieDetail";
import MovieModel from "../Models/IMovie";
import { getMovie } from "../Utils/movieHelper";
import movies from "../Constant/data";

const DetailPage = () => {
  const [movie, setMovie] = useState<MovieModel | null>(getMovie(movies));

  const renderMovie = (movie: MovieModel | null): JSX.Element => {
    return movie === null ? (
      <p>Movie is not found!</p>
    ) : (
      <MovieDetail
        overview={movie.overview}
        title={movie.title}
        posterPath={movie.posterPath}
        releaseDate={movie.releaseDate}
      />
    );
  };

  return <section>{renderMovie(movie)}</section>;
};

export default DetailPage;
