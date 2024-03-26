// import React from 'react';
// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";
import { getStoredWish } from "../../utility/localStorage";
import WishlistBook from "../wishlistBook/WishlistBook";

// WishlistBooks.propTypes = {
    
// };

function WishlistBooks() {
    const allBooks = useLoaderData()
    const localStorageWishList = getStoredWish(); 
    const wishlistBooks = allBooks.filter(book => localStorageWishList.includes(book.id))
    return (
        <div className='grid gap-8'>
            {
                wishlistBooks.map(wishlistBook=><WishlistBook key={wishlistBook.id} wishlistBook={wishlistBook}></WishlistBook>)
            }
        </div>
    );
}

export default WishlistBooks;