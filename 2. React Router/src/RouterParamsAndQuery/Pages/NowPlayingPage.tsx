import { useState } from "react";
import MovieList from "../Components/MovieList";
import { getNowPlayingMovies } from "../Utils/movieHelper";
import movies from "../Constant/data";
import MovieModel from "../Models/IMovie";

const NowPlayingPage = ():JSX.Element => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<MovieModel[]>(
    getNowPlayingMovies(movies)
  );
  return (
    <section>
      <h2>Now Playing</h2>
      <MovieList movies={nowPlayingMovies} />
    </section>
  );
};

export default NowPlayingPage;