import Movie from '../components/Moive_main';
import { useState, useEffect } from 'react';
import styles from '../css/Home.css';
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                'https://yts.mx/api/v2/list_movies.json?limit=12&sort_by=download_count'
            )
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="movies">
                    <div className="movies_wrap">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
