import './AboutMe.css'
import avatar from '../../images/avatar.png'

function AboutMe() {
    return (
        <section className="about-me" id="aboute-me">
                <h2 className="about-me__title">Студент</h2>
                <hr className="about-me__line"/>

                <div className="about-me__container">
                    <div className="avatar-container">
                        <img src={avatar} alt="Фотография студента" className="about-me__avatar"/>
                    </div>
                    <div className="description-container">

                        <p className="about-me__name">
                            Виталий
                        </p>
                        <p className="about-me__information">
                            Фронтенд-разработчик, 30 лет
                        </p>
                        <p className="about-me__information-desc">
                            Я родился и живу в Саратове, закончил факультет экономики СГУ.
                            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
                            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
                            постоянной работы.
                        </p>
                        <a href="https://github.com/LilSem" className="about-me__github-link">
                            Github
                        </a>
                    </div>
                </div>
        </section>
    );
}

export default AboutMe;
