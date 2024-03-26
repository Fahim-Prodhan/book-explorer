import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";



function ListedBook() {

    
    const hrStyle = {
        position: 'absolute',
        top: '-1px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        borderTop: '2px solid #1313134d',
        zIndex: -11
    };

    const [read, setRead] = useState(true)
    const [wish, setWish] = useState(false)

    const handleReadToggle = () => {
        setRead(true)
        setWish(false)
    }
    const handleWishToggle = () => {
        setWish(true)
        setRead(false)
    }


    return (
        <div className="mt-9 px-6">
            <h1 className="text-[28px] font-bold text-center py-8 bg-[#1313130d] rounded-2xl">Books</h1>
            <h2 className="text-lg font-bold mb-4 text-white">Sort</h2>
            <div className="flex justify-center mt-8 mb-12">
                <details className="dropdown ">
                    <summary className=" btn bg-green-400 text-white">Sort By<span className="text-2xl"><RiArrowDropDownLine /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Page Number</a></li>
                        <li><a>Author</a></li>
                        <li><a>Rating</a></li>
                    </ul>
                </details> 
            </div>
            <div className="flex gap-3">
                <NavLink onClick={handleReadToggle} className={read ? ' text-[#000] py-2 px-3 rounded-[4px] border-[#1313134d] border-2 border-b-white bg-white' : 'py-2 '} to='/listedBooks'>Read Books</NavLink>
                <NavLink onClick={handleWishToggle} className={wish ? 'text-[#000] py-2  px-3 rounded-[4px] border-[#1313134d] border-2 border-b-white bg-white' : 'py-2 '} to='/listedBooks/wish'>Wishlist Books</NavLink>
            </div>

            <div className="mb-6 relative">
                <hr style={hrStyle} />
            </div>
            <Outlet></Outlet>

        </div>
    );
}

export default ListedBook;