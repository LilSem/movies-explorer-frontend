import './SidePanel.css';
import React from "react";
import {NavLink} from "react-router-dom";
import AccountBtn from "../AccountBtn/AccountBtn";

function SidePanel({onClose}) {
    return (
        <div className="sidepanel">
            <div className="sidepanel__btn-container">
                <button onClick={onClose} className="sidepanel__btn-close"/>
            </div>
            <nav className="sidepanel__container">
                <div className="sidepanel__routes">
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive ? "sidepanel__route sidepanel__route_type_active" : "sidepanel__route"
                        }>
                        Главная
                    </NavLink>
                    <NavLink
                        to="/movies"
                        className={({isActive}) => isActive ? "sidepanel__route sidepanel__route_type_active" : "sidepanel__route"
                        }>
                        Фильмы
                    </NavLink>
                    <NavLink
                        to="/saved-movies"
                        className={({isActive}) => isActive ? "sidepanel__route sidepanel__route_type_active" : "sidepanel__route"
                        }>
                        Сохранённые фильмы
                    </NavLink>
                </div>
                <div className="sidepanel__account">
                    <AccountBtn />
                </div>
            </nav>
        </div>
    );
}

export default SidePanel;
