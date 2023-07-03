import './ShortFilmFilter.css';

function ShortFilmFilter () {
    return (
        <div className='filter'>
            <div className='filter__container'>
                <input type='checkbox' id='checkbox' className='filter__checkbox'
                />
                <label htmlFor='checkbox' className='filter__checkbox-label'/>
            </div>
            <label className='filter__label'>Короткометражки</label>
        </div>
    )
}

export default ShortFilmFilter;
