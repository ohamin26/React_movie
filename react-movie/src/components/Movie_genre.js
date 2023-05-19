import ProTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../css/Movie_genre.css';
function Movie_genre({ id, coverImg, title, year, movie_style, genres }) {
    return (
        <div className="movie_genre" style={movie_style}>
            <img src={coverImg} alt={title}></img>
            <div>
                <h2 className="movie_title">
                    <Link to={`/movie/${id}`}>
                        {title && title.length > 50
                            ? `${title.slice(0, 50)}...`
                            : title}
                    </Link>
                </h2>
                <h3 className="movie_year">{year}</h3>
                <ul className="movie_genres}">
                    {genres && genres.map((g) => <li key={g}>{g}</li>)}
                </ul>
            </div>
        </div>
    );
}

Movie_genre.prototype = {
    id: ProTypes.number.isRequired,
    coverImg: ProTypes.string.isRequired,
    title: ProTypes.string.isRequired,
    summary: ProTypes.string.isRequired,
    genres: ProTypes.arrayOf(ProTypes.string).isRequired,
};

export default Movie_genre;
