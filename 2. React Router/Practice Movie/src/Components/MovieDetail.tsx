interface MovieDetailProps {
  title: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
}

const MovieDetail = ({
  title,
  overview,
  posterPath,
  releaseDate,
}: MovieDetailProps): JSX.Element => {
  return (
    <div>
        <img src={posterPath}/>
        <h2>{title}</h2>
        <p>Release date: {releaseDate}</p>
        <p>{overview}</p>
    </div>
  );
};

export default MovieDetail;
