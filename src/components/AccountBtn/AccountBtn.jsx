import './AccountBtn.css';
import {Link} from "react-router-dom";
import accountIcon from "../../images/account-icon.svg";

function AccountBtn () {
        return (
            <>
                <Link to="/profile" className="account-btn">
                    <img src={accountIcon} alt="кнопка перехода в аккаунт"/>
                    Аккаунт
                </Link>
            </>
        );
}

export default AccountBtn;
