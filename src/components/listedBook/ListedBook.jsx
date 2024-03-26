import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredRead, getStoredWish } from "../../utility/localStorage";
import ReadBook from "../readBook/ReadBook";



function ListedBook( ) {
    
    const allBooks = useLoaderData()
    const localStorageReadList = getStoredRead();
    const listedBooks = allBooks.filter(book => localStorageReadList.includes(book.id))
    const localStorageWishList = getStoredWish(); 
    const wishlistBooks = allBooks.filter(book => localStorageWishList.includes(book.id))
    const [val , setVal]= useState(listedBooks);
    
    
    const hrStyle = {
        position: 'absolute',
        top: '-2px',
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
        setVal(listedBooks)
    }
    const handleWishToggle = () => {
        setWish(true)
        setRead(false)
        setVal(wishlistBooks)
    }

    const ratingSort = ()=>{
        const sortedByRate = [...val].sort((a,b)=> b.rating-a.rating)
        setVal(sortedByRate)
    }
    const pageSort = ()=>{
        const sortedByPage = [...val].sort((a,b)=> b.totalPages-a.totalPages)
        setVal(sortedByPage)
    }
    const yearSort = ()=>{
        const sortedByYear = [...val].sort((a,b)=> b.yearOfPublishing-a.yearOfPublishing)
        setVal(sortedByYear)
    }

   console.log(val);
    return (
        <div className="mt-9 px-6">
            <h1 className="text-[28px] font-bold text-center py-8 bg-[#1313130d] rounded-2xl">Books</h1>
            <h2 className="text-lg font-bold mb-4 text-white">Sort</h2>
            <div className="flex justify-center mt-8 mb-12">
                <details className="dropdown ">
                    <summary className=" btn bg-[#23BE0A] text-white">Sort By<span className="text-2xl"><RiArrowDropDownLine /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={ratingSort}>Rating</a></li>
                        <li><a onClick={pageSort}>Number of Pages</a></li>
                        <li><a onClick={yearSort}>Publishing Year</a></li>
                    </ul>
                </details> 
            </div>
            <div className="flex gap-3">
                <NavLink onClick={handleReadToggle} className={read ? ' text-[#000] py-2 px-3 rounded-[4px] border-[#1313134d] border-2 border-b-white bg-white' : 'py-2 '} >Read Books</NavLink>
                <NavLink onClick={handleWishToggle} className={wish ? 'text-[#000] py-2  px-3 rounded-[4px] border-[#1313134d] border-2 border-b-white bg-white' : 'py-2 '} >Wishlist Books</NavLink>
            </div>

            <div className="mb-6 relative">
                <hr style={hrStyle} />
            </div>

            <div className='grid gap-8'>
            {
                val.map(listedBook=> <ReadBook key={listedBook.id} listedBook={listedBook}></ReadBook>)
            }
            
        </div>

            {/* <Outlet></Outlet> */}

        </div>
    );
}

export default ListedBook;