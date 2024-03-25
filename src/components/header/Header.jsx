// import React from 'react';
// import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";
import headerImg from '../../assets/img/pngwing 1.png'

Header.propTypes = {
    
};

function Header() {
    return (
        <div className="font-playfair flex flex-col-reverse md:flex-row md:items-center justify-between py-4 md:py-20 px-6 md:px-[120px] bg-[#1313130d] gap-6 md:gap-20 mt-6 md:mt-14 rounded-3xl">
            <div className="flex-1">
                <h1 className="text-[#131313] font-bold text-4xl md:text-6xl">Books to freshen up your bookshelf</h1>
                <button className="btn mt-6 md:mt-12 text-white bg-[#23BE0A]"><NavLink to='/listedBook'>View The List</NavLink></button>
            </div>
            <div>
                <img src={headerImg} alt="" />
            </div>
        </div>
    );
}

export default Header;