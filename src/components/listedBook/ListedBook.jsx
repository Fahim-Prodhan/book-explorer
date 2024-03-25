
import { Link, Outlet } from "react-router-dom";


function ListedBook() {

    return (
        <div className="mt-9">
            <h1 className="text-[28px] font-bold text-center py-8 bg-[#1313130d] rounded-2xl">Books</h1>
            <div className="text-center my-8"><button className="btn">Sort</button></div>
            <div className="flex gap-4">
                <Link className="btn bg-white" to='/listedBooks/read'>Read Books</Link>
                <Link className="btn bg-white" to='/listedBooks/wish'>Wishlist Books</Link>  
            </div>
            <Outlet></Outlet>

        </div>
    );
}

export default ListedBook;