import MovieModel from "../Models/IMovie";
import isFuture from "./isFuture";

const getNowPlayingMovies = (movies: MovieModel[]): MovieModel[] => {
  return movies.filter(({ releaseDate }) => !isFuture(releaseDate));
};

const getUpcomingMovies = (movies: MovieModel[]): MovieModel[] => {
  return movies.filter(({ releaseDate }) => isFuture(releaseDate));
};

const getMovie = (movies: MovieModel[], id?: number): MovieModel | null => {
  if (!id) {
    return null;
  }
  const filteredMovies = movies.filter((movie) => movie.id === id);
  if (!filteredMovies.length) {
    return null;
  }
  return filteredMovies[0];
};

const searchMovies = (movies: MovieModel[], keyword: string): MovieModel[] => {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(keyword.toLowerCase())
  );
};

export { getNowPlayingMovies, getUpcomingMovies, getMovie, searchMovies };
