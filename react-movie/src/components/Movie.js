import ProTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div className="movie_genre">
            <img src={coverImg} alt={title}></img>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.prototype = {
    genres: ProTypes.arrayOf(ProTypes.string).isRequired,
    summary: ProTypes.string.isRequired,
    coverImg: ProTypes.string.isRequired,
    title: ProTypes.string.isRequired,
};

export default Movie;
