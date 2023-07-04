import './Login.css';
import Logo from "../Logo/Logo";
import FormSubmitBtn from "../FormSubmitBtn/FormSubmitBtn";
import {Link} from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function Login (){
    const {values, handleChange, errors, isValid} = useFormAndValidation();

    return (
        <section className="login">
            <Logo/>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login-form">
                <div className="login-form__input-container">
                    <label className="login-form__label" htmlFor="email-input">E-mail</label>
                    <input
                        className="login-form__input"
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
                    <span className={`login-form__input-error`}>{errors.email}</span>
                </div>
                <div className="login-form__input-container">
                    <label className="login-form__label" htmlFor="password-input">Пароль</label>
                    <input
                        className="login-form__input"
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
                    <span className={`login-form__input-error`}>{errors.password}</span>
                </div>
                <div className="login-form__action">
                 <span className="login-form__input-error login-form__input-error_type_api">
                    error example
                  </span>
                    <FormSubmitBtn textBtn='Войти'/>
                    <div className="login-form__action-links">
                        <span className="login-form__action-text">Ещё не зарегистрированы?</span>
                        <Link to="/signup" className="login-form__action-link">
                            Регистрация
                        </Link>
                    </div>

                </div>
            </form>
        </section>
    );
}

export default Login;
