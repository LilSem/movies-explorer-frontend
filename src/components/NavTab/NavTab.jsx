import "./NavTab.css"

function NavTab(){
return (
  <nav className="navtab__links">
    <a href="#about-project" className="navtab__route">
      О проекте
    </a>

    <a href="#techs" className="navtab__route">
      Технологии
    </a>
    <a href="#aboute-me" className="navtab__route">
      Студент
    </a>
  </nav>
);
}

export default NavTab;
