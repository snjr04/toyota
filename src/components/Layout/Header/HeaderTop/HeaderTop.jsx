
import {Link, useLocation, useNavigate} from 'react-router-dom';

//media

import {FiPhone} from 'react-icons/fi'
import {BiSearch} from "react-icons/bi"
import {useContext, useEffect} from "react";
import {SiToyota} from "react-icons/si"
import {FiShoppingCart,FiUser} from "react-icons/fi"
import {IoIosSearch,IoMdExit} from "react-icons/io"
import {CustomContext} from "../../../../config/context/context";
import HeaderCenter from "../HeaderCenter/HeaderCenter";





const HeaderTop = () => {
    const {user, logOutUser, search, setSearch} = useContext(CustomContext)

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname !== '/catalog'){
            setSearch('')
        }
    }, [location.pathname])



    return (
        <div className='header__top'>
                <div className="header__top-icon"><SiToyota size={50} color="rgb(50, 100, 255)"/></div>
            <div className="container">
                <nav className="header__top-nav">
                    <div className="header__top-menu">
                        <Link to={'/'} className="header__top-link">
                            Главная
                        </Link>
                        <Link to={'/about'} className="header__top-link">
                            О нас
                        </Link>
                        <Link to={'#footer'} className="header__top-link">
                            Контакты
                        </Link>
                    </div>
                    <div className="header__top-menu">
                        <HeaderCenter/>
                    </div>
                    <div className="header__top-menu">
                        <Link to={user.email?.length ? '/basket' : '/login'} className="header__center-icon">
                            <FiShoppingCart size={30} color="rgb(50, 100, 255)"/>
                        </Link>
                        {
                            user.email?.length ? <span onClick={logOutUser}><IoMdExit size={30} color="rgb(50, 100, 255)"/></span> : <Link to={'/login'} className="header__center-icon">
                                <FiUser size={30} color="rgb(50, 100, 255)"/>
                            </Link>
                        }
                        <a href="tel: 8 (964) 89 99 119" className="header__top-link">
                            <span>
                                <FiPhone/>
                            </span>
                            +996 (777)-777-777
                        </a>

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HeaderTop;