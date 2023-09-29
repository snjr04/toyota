
import {BsFillBasket3Fill, BsCheckLg} from "react-icons/bs"
import {AiFillDelete} from "react-icons/ai"
import {Link, useNavigate} from 'react-router-dom'
import {useContext} from "react";
import {CustomContext} from "../../config/context/context";




const Card = ({item}) => {

    const {favorites, favoritesHandler, addCarts, user, addCartsCountPlus, removeCartsCountMinus} = useContext(CustomContext)

    const navigate = useNavigate()

    return (
        <div className='card'>
            <span className="card__fav" onClick={() => favoritesHandler(item)}>
                {
                    user.carts?.some(el => el.id === item.id) ?<BsCheckLg color="rgb(50, 100, 255)" onClick={() => {
                            removeCartsCountMinus(item)
                        }
                        }
                            />: <BsFillBasket3Fill onClick={()=>{
                        if ('id' in user){
                            addCarts(item)
                        } else {
                            navigate('/login')
                        }
                    }
                    }/>
                }
            </span>
            <Link to={`/sale/${item.id}`}>
                <img src={item.image} alt="" className="card__image"/>
            </Link>
            <h3 className="card__title">
                {item.model}
            </h3>
            <p className="card__category">
                {item.category}
            </p>
            <p className="card__price">
                {item.price}$
            </p>

            <div className="card__sizes">

                <div className="card__sizes-info">
                    <p className="card__sizes-size">
                        <span>двигатель</span>
                        {item.engine}
                    </p>

                    <p className="card__sizes-size">
                        <span>передача</span>
                        {item.transmission}
                    </p>

                    <p className="card__sizes-size">
                        <span>цвет</span>
                        {item.color}
                    </p>
                </div>

                {
                    user.carts?.some(el => el.id === item.id) ?
                        <div className="card__sizes-count">
                        <p className="card__del" style={{color: 'red'}} type='button' onClick={() => removeCartsCountMinus(item.id)}><AiFillDelete/></p>
                        <button className="card__none" style={{background: 'green'}} type='button' onClick={() => addCartsCountPlus(item.id)}>+</button>
                    </div> : <button type='button' className="card__sizes-btn" onClick={() => {
                        if ('id' in user){
                            addCarts(item)
                        } else {
                            navigate('/login')
                        }
                    }}>
                            Добавить в корзину
                    </button>
                }
            </div>
        </div>
    );
};

export default Card;









