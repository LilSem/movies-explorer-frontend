import {React} from 'react';
import './SearchForm.css';
import ShortFilmFilter from "../ShortFilmFilter/ShortFilmFilter";

const SearchForm = () => {
    return (
        <section className='search'>
            <div className='search__container'>
                <form name='search-form' className='search__form' noValidate>
                    <input
                        type='text'
                        className='search-form__input'
                        placeholder='Фильм'
                        required
                    />
                    <button type='submit' className='search-form__submit-btn'></button>
                </form>
            </div>
            <ShortFilmFilter />
        </section>
    )
};

export default SearchForm;
