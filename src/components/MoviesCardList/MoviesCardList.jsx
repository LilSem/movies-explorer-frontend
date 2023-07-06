import './MoviesCardList.css';
import useResize from "../../hooks/useResize";
import {useLocation} from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import {moviesData} from "../../utils/movies";

function MoviesCardList() {

    let location = useLocation();
    const windowWidth = useResize();

    let movies =
        location.pathname === '/saved-movies'
            ? moviesData.filter((movie) => movie.isLiked)
            : moviesData;

    if (windowWidth < 768) {
        movies = movies.slice(0, 5);
    } else if ( windowWidth >= 768 && windowWidth < 1280) {
        movies = movies.slice(0, 8);
    } else if (windowWidth >= 1280) {
        movies = movies.slice(0, 16);
    }

    return (
        <ul className="movies-card-list">
            {
                movies.map((movie) => <MoviesCard key={movie.movieId} movie={movie} /> )
            }
        </ul>
    );
}

export default MoviesCardList;
