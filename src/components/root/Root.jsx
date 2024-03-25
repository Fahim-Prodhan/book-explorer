// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";


Root.propTypes = {
    
};

function Root() {
    return (
        <div className="px-[135px]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
}

export default Root;