import './Profile.css';
import FormSubmitBtn from "../FormSubmitBtn/FormSubmitBtn";

function Profile({onEdit, isEdit, onSubmit, errMessage}) {

    return (
        <section className="profile">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <form className="form-profile">
                <div className="form-profile__container">
                    <div className="form-profile__form__wrapper">
                        <label className="form-profile__label" htmlFor="input-name">Имя</label>
                        <input
                            className="form-profile__input"
                            id="input-name"
                            name="name"
                            type="text"
                            minLength="2"
                            maxLength="40"
                            required
                            value="Виталий"/>
                    </div>
                    <div className="form-profile__form__wrapper">
                        <label className="form-profile__label" htmlFor="input-email">E-mail</label>
                        <input
                            className="form-profile__input"
                            id="input-email"
                            name="email"
                            type="email"
                            minLength="2"
                            maxLength="40"
                            required
                            value="pochta@yandex.ru"/>
                    </div>
                </div>
                <div className="form-profile__btn-container">
                    {
                        isEdit ? (
                            <>
                                <span className='form-profile__error'>{errMessage}</span>
                                <FormSubmitBtn onSubmit={onSubmit} textBtn='Сохранить' />
                            </>
                            ) :
                            (
                                <>
                                    <button onClick={onEdit} className="form-profile__btn">
                                        Редактировать
                                    </button>
                                    <button className="form-profile__btn form-profile__btn_color_red">
                                        Выйти из аккаунта
                                    </button>
                                </>
                            )}
                </div>
            </form>
        </section>
    );
}

export default Profile;
