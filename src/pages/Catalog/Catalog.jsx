

import Filter from "../../components/Filter/Filter";
import {Fragment, useContext, useEffect, useState} from "react";
import Card from "../../components/Card/Card";
import api from "../../config/api/api";
import {CustomContext} from "../../config/context/context";
import {useLocation} from "react-router-dom"
import List from "../../components/List/List";

const Catalog = () => {



    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [slider, setSlider] = useState([0, 30000])

    const {search, setSearch} = useContext(CustomContext)

    const location = useLocation()


    useEffect(() => {
        let queryParamsApi = `?${search.length ? `model_like=${search}&` : ''}${category.length ? `category=${category}&` : ''}${sort.length && sort !== 'rate' ? `_sort=price&_order=${sort}&` : sort.length ? `_sort=rate&_order=desc&` : ''}`
        let queryParamsFromTo = `price_gte=${slider[0]}&price_lte=${slider[1]}`

        api(`products${queryParamsApi}${queryParamsFromTo}`).json()
            .then((res) => setProducts(res))
    }, [search, sort, category, slider])



    return (
        <main>
            <section className="catalog">
                <div className="container">
                    <div className="catalog__row">
                        <Filter slider={slider} setSlider={setSlider} category={category} setCategory={setCategory} sort={sort} setSort={setSort}/>
                        <div className="hitSale__row catalog__content">
                            {
                                list.map((item) => (
                                    <Fragment key={item.id}>
                                        <List item={item}/>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Catalog;