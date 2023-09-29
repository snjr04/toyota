

import Card from "../Card/Card";
import {useContext, useEffect, Fragment} from "react";
import {CustomContext} from "../../config/context/context";


const HitSale = () => {
    const {hitSale, getHitSale} = useContext(CustomContext)
    useEffect(() => {
        getHitSale()
    }, [])


    return (
        <section className='hitSale'>
            <div className="container">
                {
                    location.pathname!=='/all'?<h2 className="hitSale__title">Популярные автомобили</h2> : <h2 className="hitSale__title">Все автомобили</h2>
                }
                <div className="hitSale__row">
                    {
                        hitSale.map((item) => (
                            <Fragment key={item.id}>
                                <Card item={item}/>
                            </Fragment>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default HitSale;