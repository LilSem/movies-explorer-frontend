import './Register.css';
import Logo from "../Logo/Logo";
import FormSubmitBtn from "../FormSubmitBtn/FormSubmitBtn";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import {Link} from "react-router-dom";

function Register() {
    const {values, handleChange, errors, isValid} = useFormAndValidation();

    return (
        <section className="register">
            <Logo/>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register-form">
                <div className="register-form__input-container">
                    <label className="register-form__label" htmlFor="name-input">Имя</label>
                    <input
                        className="register-form__input"
                        id="name-input"
                        name="name"
                        value={values.name || ''}
                        onChange={handleChange}
                        type="text"
                        placeholder="Имя"
                        minLength="2"
                        maxLength="40"
                        required
                    />
                    <span className={`register-form__input-error`}>{errors.name}</span>
                </div>
                <div className="register-form__input-container">
                    <label className="register-form__label" htmlFor="email-input">E-mail</label>
                    <input
                        className="register-form__input"
                        id="email-input"
                        name="email"
                        value={values.email || ''}
                        onChange={handleChange}
                        type="email"
                        placeholder="Почта"
                        minLength="2"
                        maxLength="40"
                        required
                    />
                    <span className={`register-form__input-error`}>{errors.email}</span>
                </div>
                <div className="register-form__input-container">
                    <label className="register-form__label" htmlFor="password-input">Пароль</label>
                    <input
                        className="register-form__input"
                        id="password-input"
                        name="password"
                        value={values.password || ''}
                        onChange={handleChange}
                        type="password"
                        placeholder="Пароль"
                        minLength="2"
                        maxLength="40"
                        required
                    />
                    <span className={`register-form__input-error`}>{errors.password}</span>
                </div>
                <div className="register-form__action">
                 <span className="register-form__input-error register-form__input-error_type_api">
                    При обновлении профиля произошла ошибка.
                  </span>
                    <FormSubmitBtn textBtn='Зарегистрироваться'/>

                    <div className="register-form___link-container">
                        <span className="register-form___text-link">Уже зарегистрированы? </span>
                        <Link to="/signin" className="register-form__link">
                            Войти
                        </Link>
                    </div>

                </div>
            </form>
        </section>
    );
}

export default Register;
