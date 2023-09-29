
import {useContext} from "react";
import {CustomContext} from "../../config/context/context";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const {user, removeCartsCountMinus, addCartsCountPlus} = useContext(CustomContext)

    const navigate = useNavigate()

    return (
        <div>
            <section className="cart">
                <div className="container">
                    <div className="cart__top">
                        <h2 className="cart__title">
                            Ваша корзина
                        </h2>
                    </div>
                    <div className="cart__row">
                        {
                            user.carts?.map((item) => (
                                <div className="cart__card">
                                    <div className="cart__card-item">
                                        <img src={`/${item.image}`} alt=""/>
                                        <div className="cart__card-info">
                                            <p className="cart__list">
                                                рейтинг:
                                                <br/>
                                                {item.rating}
                                            </p>
                                            <p className="cart__list">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="cart__card-info">
                                            <h3 className="cart__card-title">
                                                {item.model}
                                            </h3>
                                            <h4 className="cart__category">
                                                {item.category}
                                            </h4>
                                            <p className="cart__card-size">
                                                {item.engine}, {item.transmission}, {item.color}
                                            </p>

                                            <p className="cart__card-size">
                                                <div className="card__sizes-count">
                                                    <p style={{color:'red',fontSize:'50px',cursor:'pointer'}} type='button' onClick={() => removeCartsCountMinus(item.id)}>-</p>
                                                    <span>{
                                                        item.count
                                                    }</span>
                                                    <p style={{color:'#3264FF',fontSize:'36px',cursor:'pointer'}} type='button' onClick={() => addCartsCountPlus(item.id)}>+</p>
                                                </div>
                                            </p>

                                        </div>
                                        <div className="cart__card-info"></div>
                                        <p className="cart__card-price">
                                            {item.price}$
                                            <br/>
                                            {
                                                item.price * item.count
                                            }$
                                        </p>
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                    <div className="cart__bottom">
                        <p className="cart__bottom-count">
                            Итоговая стоимость: {user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)}$
                        </p>
                        <button className="cart__bottom-btn" onClick={() => navigate('/checkout')}>
                            Заказать
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;