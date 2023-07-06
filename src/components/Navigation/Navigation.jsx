import React, { useState} from 'react';
import {Link} from "react-router-dom";
import useResize from "../../hooks/useResize";
import './Navigation.css'
import SidePanel from "../SidePanel/SidePanel";
import AccountBtn from "../AccountBtn/AccountBtn";

function Navigation({isLoggedIn}) {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useResize();

  const handleToggleSideBar = () => {
    setIsOpen(!isOpen);
  }


  return (
    <nav className="navigation">
      {!isLoggedIn && (
        <>
          <Link to="/signup" className="navigation__route">
            Регистрация
          </Link>
          <Link to="/signin" className="navigation__route navigation__route_type_signin">
            Войти
          </Link>
        </>
      )}
      {isLoggedIn && windowWidth >= 1280 && (
        <>
          <Link to="/movies" className="navigation__route">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="navigation__route navigation__route_type_indent">
            Сохранённые фильмы
          </Link>
          <AccountBtn />
        </>
      )}
      {isLoggedIn && windowWidth < 1280 &&
        (<button onClick={handleToggleSideBar} className="navigation__burger"/>)
      }
      {isOpen && (
        <SidePanel onClose = {handleToggleSideBar}/>
      )
      }
    </nav>
  );
}

export default Navigation;
