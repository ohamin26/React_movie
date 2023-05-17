import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';
import styles from '../css/Genre.css';

function Genre() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const { genre } = useParams();
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
        <div className>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movies) => (
                        <Movie
                            key={movies.id}
                            id={movies.id}
                            coverImg={movies.medium_cover_image}
                            title={movies.title_long}
                            summary={movies.description_intro}
                            genres={movies.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Genre;
