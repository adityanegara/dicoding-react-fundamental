import MovieList from "../Components/MovieList";
import { useState } from "react";
import { getUpcomingMovies } from "../Utils/movieHelper";
import movies from "../Constant/data";
import MovieModel from "../Models/IMovie";

const UpcomingPage = () =>{
    const [upcomingMovies, setUpcomingMovies] = useState<MovieModel[]>(getUpcomingMovies(movies));
    return(
        <section>
            <h2>Upcoming Movies</h2>
            <MovieList movies={upcomingMovies}/>
        </section>
    )
}

export default UpcomingPage;