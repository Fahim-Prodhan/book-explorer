
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
        zIndex:-11
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
        <div className="mt-9">
            <h1 className="text-[28px] font-bold text-center py-8 bg-[#1313130d] rounded-2xl">Books</h1>
            <div className="text-center my-8"><button className="btn">Sort</button></div>
            <div className="flex gap-3">
                <NavLink onClick={handleReadToggle} className={read && ' mt px-3 rounded-[3px] border-[#1313134d] border-2 border-b-white bg-white'} to='/listedBooks'>Read Books</NavLink>
                <NavLink onClick={handleWishToggle} className={wish && ' px-3 rounded-[3px] border-[#1313134d] border-2 border-b-white bg-white'} to='/listedBooks/wish'>Wishlist Books</NavLink>
            </div>

            <div className="mb-6 relative">
                <hr style={hrStyle} />
            </div>
            <Outlet></Outlet>

        </div>
    );
}

export default ListedBook;