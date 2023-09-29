
import {BsFillBasket3Fill, BsCheckLg} from "react-icons/bs"
import {AiFillDelete} from "react-icons/ai"
import {Link, useNavigate} from 'react-router-dom'
import {useContext} from "react";
import {CustomContext} from "../../config/context/context";




const List = ({item}) => {

    const {favorites, favoritesHandler, addCarts, user, addCartsCountPlus, removeCartsCountMinus} = useContext(CustomContext)

    const navigate = useNavigate()
    return (
        <>
        <div className="list">
            <div className="container">
                <Link to={`/sale/${item.id}`} className="list__list">
                    <div className="list__menu">
                        <img src={item.image} alt="" className="list__menu-img"/>
                    </div>
                    <div className="list__menu">
                        <div className="list__menu-list">
                            <div className="list__menu-menu">
                                <h2 className="list__menu-title">{item.model}</h2>
                                <h2 className="list__menu-title">{item.category}</h2>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        </>
    );
};

export default List;