// import React from 'react';
// import PropTypes from 'prop-types';

import Books from "../books/Books";
import Header from "../header/Header";

Home.propTypes = {
    
};

function Home() {
    return (
        <div>
            <div className="mx-6"><Header></Header></div>
            <div className="mt-[100px] mx-6 md:mx-0">
                <Books></Books>
            </div>
        </div>
    );
}

export default Home;