import ProTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ load, id, coverImg, title, summary, genres, year }) {
    return (
        <div>
            <img src={coverImg} alt={title}></img>
            {load === 'main' ? (
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
            ) : (
                <h2>{title}</h2>
            )}
            <p>{summary}</p>
            {load === 'detail' ? (
                <ul>
                    {genres.map((genre) => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
            ) : (
                ''
            )}
            <hr />
        </div>
    );
}

Movie.prototype = {
    load: ProTypes.string.isRequired,
    id: ProTypes.number.isRequired,
    coverImg: ProTypes.string.isRequired,
    title: ProTypes.string.isRequired,
    summary: ProTypes.string.isRequired,
    genres: ProTypes.arrayOf(ProTypes.string).isRequired,
};

export default Movie;
