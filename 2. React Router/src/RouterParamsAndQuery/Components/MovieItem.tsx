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
      <h3>{title}</h3>
      <p>{overview}</p>
    </article>
  );
};

export default MovieItem;
