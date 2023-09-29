

import HeaderTop from "./HeaderTop/HeaderTop";
import {useLocation} from "react-router-dom";
import HeaderCenter from "./HeaderCenter/HeaderCenter";

const Header = () => {

    const location = useLocation()

    console.log(location)

    return (
        <header className='header'>
                <HeaderTop/>
        </header>
    );
};

export default Header;