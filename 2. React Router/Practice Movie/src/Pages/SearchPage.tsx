import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import MovieList from "../Components/MovieList";
import { searchMovies } from "../Utils/movieHelper";
import movies from "../Constant/data";
import MovieModel from "../Models/IMovie";
import { useSearchParams } from 'react-router-dom'

const SearchPage = () => {
  const [foundedMovie, setFoundedMovies] = useState<MovieModel[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearch = (keyword: string): void => {
    setSearchParams({title: keyword})
    setFoundedMovies(searchMovies(movies, keyword));
  };
  
  useEffect(()=>{
    setFoundedMovies(searchMovies(movies, searchParams.get('title')));
  }, [searchParams])

  const getDefaultKeyword = (titleFromSearchParams : string | null):string =>{
    return (titleFromSearchParams) ? titleFromSearchParams : '';
  }

  return (
    <section>
      <h2>Search Movie</h2>
      <SearchBar search={onSearch} defaultKeyword={getDefaultKeyword(searchParams.get('title'))} />
      <MovieList movies={foundedMovie} />
    </section>
  );
};

export default SearchPage;
