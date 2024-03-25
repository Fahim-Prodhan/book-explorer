// import React from 'react';
// import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

BookDetails.propTypes = {
    
};

function BookDetails() {

    const books = useLoaderData()
    const {id} = useParams()
    const book = books.find(book=> book.id == id)

    return (
        <div className='grid grid-cols-2 mt-14 gap-12 font-workSans'>
            <div className='place-self-center w-[573px] h-[711px] bg-[#F3F3F3] rounded-2xl'>
                <img className=' w-[573px] p-[75px]' src={book.image} alt="" />
            </div>
            <div className=''>
                <h1 className='font-playfair text-[40px] font-bold'>{book.bookName}</h1>
                <p className='pt-4 text-[20px] font-medium'>By: {book.author}</p>
                <div className='mt-6 mb-4'>
                    <hr />
                </div>
                <p className='text-[20px] font-medium'>{book.category}</p>
                <div className='mt-4 mb-6'>
                    <hr />
                </div>
                <p><span className='font-bold'>Review:</span> {book.review}</p>
                <div className='mt-7 flex items-center gap-4'>
                    <p className='font-bold'>Tag</p>
                    <div className='flex'>
                    {
                        book.tags.map((tag,index)=> <p
                            className='mr-3 px-5 py-2 bg-[#23be0a0d] rounded-[30px] text-[#23BE0A]' key={index}>#{tag}
                        </p>)
                    }
                    </div>
                </div>
                <div className='my-7'>
                    <hr />
                </div>
                <div className='grid gap-3'>
                    <div className='grid grid-cols-2'><p>Number of Pages:</p> <p className='font-semibold'>{book.totalPages}</p></div>
                    <div className='grid grid-cols-2'><p>Publisher:</p> <p className='font-semibold'>{book.publisher}</p></div>
                    <div className='grid grid-cols-2'><p>Year of Publishing:</p> <p className='font-semibold'>{book.yearOfPublishing}</p></div>
                    <div className='grid grid-cols-2'><p>Rating:</p> <p className='font-semibold'>{book.rating}</p></div>
                </div>
                <div className='mt-8 flex gap-4'>
                    <button className='btn bg-white border border-[#000] text-black'>Read</button>
                    <button className='btn bg-[#50B1C9] text-white'>Wishlist</button>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;