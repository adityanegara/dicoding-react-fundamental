import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../Components/MovieDetail";
import MovieModel from "../Models/IMovie";
import { getMovie } from "../Utils/movieHelper";
import movies from "../Constant/data";

const DetailPage = (): JSX.Element => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieModel | null>(getMovie(movies));
  useEffect(() => {
    if (id) {
      setMovie(getMovie(movies, parseInt(id)));
    }
  }, []);

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
