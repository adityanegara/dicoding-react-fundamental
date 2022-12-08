import { Link } from "react-router-dom";
import MovieModel from "../Models/IMovie";

const MovieItem = ({
  id,
  title,
  backdropPath,
  overview,
}: MovieModel): JSX.Element => {
  return (
    <article>
      <img src={backdropPath} alt={title} />
      <Link to={`/detail/${id}`}>{title}</Link>
      <p>{overview}</p>
    </article>
  );
};

export default MovieItem;
