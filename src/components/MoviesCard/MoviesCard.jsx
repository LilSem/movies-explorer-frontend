import './MoviesCard.css';
import getTimeFromMinutes from "../../utils/timeConverter";
import {useLocation} from "react-router-dom";

function MoviesCard({movie}) {

    let location = useLocation();

    return (
        <li className="movie-card">
            <img src={movie.thumbnail} alt={movie.nameRU} className="movie-card__image"/>
            <div className="movie-card__wrapper">
                <div className="movie-card__description">
                    <p className="movie-card__name">{movie.nameRU}</p>
                    <p className="movie-card__duration">{getTimeFromMinutes(movie.duration)}</p>
                </div>
                <div className="movie-card__btn-container">
                    {
                        location.pathname === '/saved-movies' ? (
                                <button className={`movie-card__btn-remove`}/>
                            )
                            : (
                                <button className={`movie-card__btn-like ${movie.isLiked && 'movie-card__btn-like_type_active'}`}/>
                            )
                    }
                </div>
            </div>
        </li>
    );
}

export default MoviesCard;
