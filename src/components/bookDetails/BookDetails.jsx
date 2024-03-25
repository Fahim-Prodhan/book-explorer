import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

BookDetails.propTypes = {
    
};

function BookDetails() {

    const books = useLoaderData()
    console.log(books);
    const {id} = useParams()
    console.log(parseInt(id));
    

    return (
        <div>
            <h1>Book Details</h1>
        </div>
    );
}

export default BookDetails;