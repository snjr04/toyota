

import FilterSelect from "../FilterSelect/FilterSelect";

import {Button} from "@mui/material"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Filter = ({sort, setSort, category, setCategory, slider, setSlider}) => {

    const resetFilter = () => {
        setSort('');
        setCategory('');
        setSlider([0, 100000])
    }

    return (
        <>
            <div className="catalog__aside">
                <div className="container">
                    <div className="catalog__aside-menu">
                        <FilterSelect title='Модель' state={category} setState={setCategory} array={['Гибрид', 'Кроссовер', 'Седан', 'Пикап', 'Минивэн', 'Внедорожник', 'Хэтчбек']}/>
                        <FilterSelect title='Сортировать' state={sort} setState={setSort} array={['asc', 'desc', 'rate']}/>
                        <div className="catalog__aside-price">
                            <input type="number" min="0"/>
                        </div>
                        <div className="catalog__aside-price">
                            <input type="number" min="1"/>
                        </div>
                        <div className="catalog__aside-btn">
                            <Button variant="contained" onClick={resetFilter}>Сбросить</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;