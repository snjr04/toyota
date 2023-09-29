import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom'

import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {CustomContext} from "../../config/context/context";


const ProductInfo = ({product}) => {

    const navigate = useNavigate()

    const {favorites, favoritesHandler} = useContext(CustomContext)

    return (
        <div className="product__info">
            <h2 className="product__info-title">
                {product.model}
            </h2>
            <p className="product__info-category">
                {product.category}
            </p>

            <div className="product__info-row">
                <p className="product__info-price">
                    {product.price}$
                </p>
                <button onClick={() => navigate('/basket')} className="product__info-btn">
                    Купить
                </button>

            </div>
            <div className="product__info-selects">
                <ul className="product__info-sizes">
                    <li>
                        {product.engine},{product.transmission},{product.color}
                    </li>
                </ul>
            </div>

            <div className="product__info-description">
                <h2>
                    Описание
                </h2>
                <p>
                    {product.description}
                </p>
            </div>

        </div>
    );
};

export default ProductInfo;