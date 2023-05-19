import ProTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styels from '../css/Movie_detail.css';
function Movie_detail({ coverImg, title, summary, genres }) {
    return (
        <div className="movie_detail">
            <img src={coverImg} alt={title}></img>
            <ul>
                <li>
                    <strong className="title">{title}</strong>
                </li>
                <li>
                    <p className="summary">{summary}</p>
                </li>
                <li>
                    <strong>genre : </strong>
                    <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
                </li>
            </ul>
        </div>
    );
}

Movie_detail.prototype = {
    genres: ProTypes.arrayOf(ProTypes.string).isRequired,
    summary: ProTypes.string.isRequired,
    coverImg: ProTypes.string.isRequired,
    title: ProTypes.string.isRequired,
};

export default Movie_detail;
