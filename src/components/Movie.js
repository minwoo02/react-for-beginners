import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary}</p>
      <ul className={styles.movie__genres}>
        <li>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </li>
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropsTypes.number.isRequired,
  coverImg: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  summary: PropsTypes.string.isRequired,
  genres: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

export default Movie;
