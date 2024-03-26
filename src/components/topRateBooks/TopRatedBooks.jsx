// import React from 'react';
// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";
import TopRated from "../topRated/TopRated";

TopRatedBooks.propTypes = {

};

function TopRatedBooks() {
    const top4Books = useLoaderData();
    const sortedTopBooks = [...top4Books].sort((a, b) => b.rating - a.rating)

    return (
        <div>
            <h1 className="text-[28px] font-bold text-center py-8 bg-[#1313130d] rounded-2xl md:my-12">Top Rated Books</h1>
            <div className="grid md:grid-cols-3 gap-6 mx-6">
                {
                    sortedTopBooks.slice(0, 4).map(topBook => <TopRated key={topBook.id} topBook={topBook}></TopRated>)
                }
            </div>
        </div>
    );
}

export default TopRatedBooks;