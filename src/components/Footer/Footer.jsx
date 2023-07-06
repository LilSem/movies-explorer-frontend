import './Footer.css'

function Footer (){
  return(
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
            <div className="footer__links">
                <a href="https://practicum.yandex.ru/" className="footer__link">
                    Яндекс.Практикум
                </a>
                <a href="https://github.com/LilSem" className="footer__link">
                    Github
                </a>
            </div>
            <p className="footer__date">&copy; {new Date().getFullYear()}</p>
        </div>

    </footer>
  );
}

export default Footer;
