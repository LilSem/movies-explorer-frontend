import "./AboutProject.css"

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <hr className="about-project__line"/>
      <div className="about-project__container">
        <div className="about-project__description">
          <p className="about-project__description-title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description">
          <p className="about-project__description-title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__weeks">
        <div className="about-project__week about-project__week_type_first">
            1 неделя
        </div>
        <div className="about-project__week about-project__week_type_other">
          4 недели
        </div>
      </div>
      <div className="about-project__technologies">
        <div className="about-project__technology">
          Back-end
        </div>
        <div className="about-project__technology about-project__technology_type_other">
          Front-end
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
