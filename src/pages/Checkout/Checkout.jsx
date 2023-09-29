

import {useContext} from "react";
import {CustomContext} from "../../config/context/context";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom"


const Checkout = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm()

    const {user, addOrder} = useContext(CustomContext)

    const submitForm = (data) => {
        let order = {
            ...data,
            order: user.carts,
            totalPrice: user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)
        }
        addOrder(order)
    }


    return (
        <section className="checkout">
            <div className="container">
                <h2 className="cart__title">
                    Оформление заказа
                </h2>
                <form className="checkout__form" onSubmit={handleSubmit(submitForm)}>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Данные покупателя
                        </h3>
                        <div className="checkout__form-fields">
                            <input {...register('name')} defaultValue={user.name} type="text" className="checkout__form-field" placeholder="Имя"/>
                            <input {...register('email')} defaultValue={user.email} type="email" className="checkout__form-field" placeholder="E-mail"/>
                            <input {...register('phone')} defaultValue={user.phone} type="tel" className="checkout__form-field" placeholder="Телефон"/>
                        </div>
                    </div>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Ваш заказ
                        </h3>
                        <ul className="checkout__form-list">
                            {
                                user.carts?.map((item) => (
                                    <li key={item.id} className="checkout__form-item">
                                        <p className="checkout__form-product">
                                            {item.model}
                                        </p>
                                        <p className="checkout__form-price">
                                            {item.count} / {item.price * item.count} $
                                        </p>
                                    </li>
                                ))
                            }
                            <li className="checkout__form-item checkout__form-item_count">
                                <p className="checkout__form-product">
                                    Итого:
                                </p>
                                <p className="checkout__form-price">
                                    {user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)}$
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Адрес получателя
                        </h3>
                        <div className="checkout__form-fields">
                            <input {...register('city')} type="text" required className="checkout__form-field" placeholder="Город"/>
                            <input {...register('street')} type="text" required className="checkout__form-field" placeholder="Улица"/>
                            <input {...register('home')} type="text" required className="checkout__form-field" placeholder="Дом"/>
                            <input {...register('flat')} type="text" required className="checkout__form-field" placeholder="Дополнительная информация"/>
                        </div>
                    </div>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Способы оплаты
                        </h3>
                        <div className="checkout__form-list">
                            <label className="checkout__form-label">
                                <input required={'not'} type="checkbox"/>
                                Оплата наличными
                            </label>
                            <button onClick={()=>navigate('/')} className="checkout__form-btn">
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;