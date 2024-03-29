import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie_detail';

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();

        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(movie);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Movie
                    key={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title_long}
                    summary={movie.description_intro}
                    genres={movie.genres}
                />
            )}
        </div>
    );
}
export default Detail;
