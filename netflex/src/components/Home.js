import MovieList from './MovieList';
import{ useState, useEffect } from 'react';
function Home(){
    const [movies,setMovies]=useState([])

    async function getMovies(){
        const url=`https://movies-library-fmzm.onrender.com`;
        console.log(11111,url);

        const response = await fetch(`${url}/trending`);
        console.log(2222,response);

        const MoviesData = await response.json();
        console.log(3333,MoviesData);
       
        setMovies(MoviesData);
        console.log(44444,movies)

    }

    useEffect(()=>{
        getMovies();
    },[]);


    return(
        <>
         <MovieList movies={movies}/>
        </>
    )
}
export default Home;
