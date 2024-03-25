import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    const links = <>
        <li><NavLink to="/" style={({ isActive }) => ({
            color: isActive ? '#23BE0A' : '#545e6f',
            background: isActive ? '#ffff' : '#ffff',
            border: isActive ? '2px solid #23BE0A' : 'none'
        })}>Home</NavLink></li>
        <li><NavLink to='/listedBook' style={({ isActive }) => ({
            color: isActive ? '#23BE0A' : '#545e6f',
            background: isActive ? '#ffff' : '#ffff',
            border: isActive ? '2px solid #23BE0A' : 'none'
        })}>Listed Books</NavLink></li>
        <li><NavLink to='pagesToRead' style={({ isActive }) => ({
            color: isActive ? '#23BE0A' : '#545e6f',
            background: isActive ? '#ffff' : '#ffff',
            border: isActive ? '2px solid #23BE0A' : 'none'
        })}>Pages to Read</NavLink></li>
    </>

    return (
        <nav className="navbar bg-base-100 mt-3 md:mt-12 font-workSans">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                        <a className="btn bg-[#59C6D2] text-white">Sign up</a>
                    </ul>
                </div>
                <button className=" text-[#131313]  md:text-3xl font-bold">Book Explore</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end hidden md:flex">
                <a className="btn mr-3 bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign up</a>
            </div>
        </nav>
    );
};

export default Navbar;