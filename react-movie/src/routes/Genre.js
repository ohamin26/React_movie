import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie_genre';
import styles from '../css/Genre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
function Genre() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [trans, setTrans] = useState(0);
    const { genre } = useParams();
    const onClickL = () => {
        if (trans >= 0) {
            return;
        }
        setTrans((current) => current + 460);
    };
    const onClickR = () => {
        if (trans <= -8000) {
            return;
        }
        setTrans((current) => current - 460);
    };
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?genre=${genre}&sort_by=download`
            )
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, [genre]);
    console.log(movies);
    return (
        <div className="movie_genre_main">
            <div className="movie_genre_slide">
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div
                        className="movie_genre_slide_show"
                        style={{ transform: `translateX(${trans}px)` }}
                    >
                        {movies.map((movies) => (
                            <Movie
                                key={movies.id}
                                id={movies.id}
                                coverImg={movies.medium_cover_image}
                                title={movies.title}
                                year={movies.year}
                                genre={movies.genre}
                                movie_style={{
                                    minWidth: '350px',
                                    height: '300px',
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div>
                {loading ? null : (
                    <div className={styles.controller}>
                        <button className="left" onClick={onClickL}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <button className="right" onClick={onClickR}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Genre;
