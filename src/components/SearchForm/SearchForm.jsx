import {React} from 'react';
import './SearchForm.css';
import ShortFilmFilter from "../ShortFilmFilter/ShortFilmFilter";

const SearchForm = () => {
    return (
        <section className='search'>
            <div className='search__container'>
                <form name="search__form" className='search__form'>
                    <input
                        type='text'
                        className='search__form-input'
                        placeholder='Фильм'
                        minLength='2'
                        maxLength='200'
                        required
                    />
                    <button type='submit' className='search__form-submit-btn'></button>
                </form>
            </div>
            <ShortFilmFilter />
        </section>
    )
};

export default SearchForm;
