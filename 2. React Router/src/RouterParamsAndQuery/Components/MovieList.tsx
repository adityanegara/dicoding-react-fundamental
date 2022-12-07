import MovieItem from "./MovieItem";
import MovieModel from "../Models/IMovie";

interface MovieListProps {
  movies: MovieModel[];
}

const MovieList = ({ movies }: MovieListProps): JSX.Element => {
  const renderMovies = (movies: MovieModel[]): JSX.Element[] | JSX.Element => {
    if (!movies.length) {
      return <p>No movie found</p>;
    } else {
      return movies.map((movie) => (
        <MovieItem
          key={movie.id}
          backdropPath={movie.backdropPath}
          id={movie.id}
          posterPath={movie.posterPath}
          overview={movie.overview}
          releaseDate={movie.releaseDate}
          title={movie.title}
        />
      ));
    }
  };

  return <div>{renderMovies(movies)}</div>;
};

export default MovieList;
