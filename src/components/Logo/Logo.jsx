import './Logo.css';
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";

function Logo (){
    return (
        <Link to="/">
            <img src={logo} alt="Логотип сайта" className="logo"/>
        </Link>
    );
}

export default Logo;
