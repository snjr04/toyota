import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// import {camry} from "../../assets/products/camry.png"



const About = () => {
    return (
        <section className="about">
            <div className="container">
                    <div className="about__menu">
                        <div className="about__list">
                            <div className="about__list-img">
                                <img src="https://paultan.org/image/2023/08/2023_Toyota_bZ4X_Malaysia_Ext-4-630x420.jpg " alt="" className="about__list-img"/>
                            </div>
                            <div className="about__list-menu">
                                <h2 className="about__list-title">Созданa, чтобы выделяться</h2>
                                <p className="about__list-text">Новая Corolla обладает неоспоримым ощущением силы, выраженным в утонченных, плавных линиях и широком, но обтекаемом корпусе. Её особый внешний вид дополняют множество современных деталей, в том числе светодиодные фары, хромированные элементы отделки и 17" легкосплавные диски.</p>
                            </div>
                        </div>
                        <div className="about__list">
                            <div className="about__list-menu">
                                <h2 className="about__list-title">Икона стиля современности</h2>
                                <p className="about__list-text">Новая Corolla, созданная на платформе Toyota New Global Architecture (TNGA) обеспечивает превосходную во всех отношениях езду. Все в седане Corolla, от улучшенной подвески и динамичной управляемости до низкого центра тяжести, делает из него икону стиля современности.</p>
                            </div>
                            <div className="about__list-img">
                                <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Camry/10926/1690544712715/front-left-side-47.jpg" alt="" className="about__list-image"/>
                            </div>

                        </div>
                        <div className="about__list">
                            <img src="https://thenewswheel.com/wp-content/uploads/2014/11/2015-Toyota-RAV4-overview-5-630x420.jpg" alt="" className="about__list-img"/>
                            <div className="about__list-menu">
                                <h2 className="about__list-title">Изысканная, просторная и удобная</h2>
                                <p className="about__list-text">Предлагая тщательно продуманные технологии и лучший в своем классе комфорт для каждого пассажира, интерьер расслабляет насколько это возможно. Благодаря продуманному месту для багажа, достаточному пространству для ног и отделке премиум-класса ваше путешествие будет таким же приятным, как и его цель</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default About;