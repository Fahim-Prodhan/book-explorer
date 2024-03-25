// import React from 'react';
// import PropTypes from 'prop-types';

import Books from "../books/Books";
import Header from "../header/Header";

Home.propTypes = {
    
};

function Home() {
    return (
        <div>
            <Header></Header>
            <div className="mt-[100px]">
                <Books></Books>
            </div>
        </div>
    );
}

export default Home;