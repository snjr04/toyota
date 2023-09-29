import React from 'react';
import {Link} from 'react-router-dom'
import {BsTelegram,BsInstagram,BsWhatsapp} from "react-icons/bs"
import {MdEmail} from "react-icons/md"



const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <nav className="footer__nav">
                        <div className="footer__menu">
                            <Link to={'/'} className="footer__menu-nav">Главная</Link>
                            <Link to={'/about'} className="footer__menu-nav">О нас</Link>
                        </div>
                        <div className="footer__list">
                            <Link to={'https://t.me/Sanjar041504'} className="footer__list-social"><BsTelegram size={25}/></Link>
                            <Link to={'https://www.instagram.com/toyota/'} className="footer__list-social"><BsInstagram size={25}/></Link>
                            <Link to={''} className="footer__list-social"><MdEmail size={25}/></Link>
                            <Link to={''} className="footer__list-social"><BsWhatsapp size={25}/></Link>
                        </div>
                        <div className="footer__list">
                            <a href="+996 (777)-777-777" className="footer__menu-nav">+996 (777)-777-777</a>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    );
};

export default Footer;