import './App.css';
import Header from '../Header/Header';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import {Route, Routes} from "react-router-dom";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import {useState} from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isEditProfile, setIsEditProfile] = useState(false);

    const handleEditProfile = (event) => {
        event.preventDefault();
        setIsEditProfile(true);
    }


    return (
        <div className="App">

            <Routes>
                <Route path="/"
                       element={<Main/>}
                />
                <Route path="/movies"
                       element={
                           <>
                               <Header isLoggedIn={isLoggedIn}/>
                               <Movies/>
                               <Footer/>
                           </>
                       }
                />
                <Route path="/saved-movies"
                       element={
                           <>
                               <Header isLoggedIn={isLoggedIn}/>
                               <Movies/>
                               <Footer/>
                           </>
                       }
                />
                <Route path="/profile"
                       element={
                           <>
                               <Header isLoggedIn={isLoggedIn}/>
                               <Profile
                                   onEdit={handleEditProfile}
                                   isEdit={isEditProfile}/>
                           </>
                       }
                />
                <Route path="/signup"
                       element={ <Register/> }
                />
                <Route path="/signin"
                       element={ <Login/> }
                />
                <Route path="*"
                       element={ <NotFound/> }
                />
            </Routes>
        </div>
    );
}

export default App;
