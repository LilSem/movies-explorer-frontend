import './Portfolio.css'
import icon from '../../images/link-icon.svg'

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__list">
          <a href="https://lilsem.github.io/how-to-learn/"  rel="noreferrer" className="portfolio__link" target="_blank">
            <p className="portfolio__link-title">Статичный сайт</p>
            <img src={icon} alt="ссылка" className="portfolio__link-icon"/>
          </a>
        </li>
        <li className="portfolio__list">
          <a href="https://lilsem.github.io/russian-travel/"  rel="noreferrer" className="portfolio__link" target="_blank">
            <p className="portfolio__link-title">Адаптивный сайт</p>
            <img src={icon} alt="ссылка" className="portfolio__link-icon"/>
          </a>
        </li>
        <li className="portfolio__list">
          <a href="https://lilsem.nomoredomains.monster/" className="portfolio__link portfolio__link_type_reset"  rel="noreferrer" target="_blank">
            <p className="portfolio__link-title">Одностраничное приложение</p>
            <img src={icon} alt="ссылка" className="portfolio__link-icon"/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
