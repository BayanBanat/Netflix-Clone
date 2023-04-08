import MovieList from './MovieList';
import { useState, useEffect } from 'react';
function Home() {
    const [movies, setMovies] = useState([])

    async function getMovies() {
        const url =REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/trending`);
        const MoviesData = await response.json();
        setMovies(MoviesData);
    }

    useEffect(() => {
        getMovies();
    }, []);


    return (
        <>
            <MovieList movies={movies} />
        </>
    )
}
export default Home;
