import ProTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../css/Movie_main.css';
import style from '../css/Home.css';
function Movie({ id, coverImg, title }) {
    return (
        <div
            className="movie"
            onMouseEnter={() => {
                document.querySelector(
                    '.movies_wrap'
                ).style.animationPlayState = 'paused';
            }}
            onMouseLeave={() => {
                document.querySelector(
                    '.movies_wrap'
                ).style.animationPlayState = 'running';
            }}
        >
            <img src={coverImg} alt={title}></img>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
        </div>
    );
}

Movie.prototype = {
    coverImg: ProTypes.string.isRequired,
    title: ProTypes.string.isRequired,
};

export default Movie;
