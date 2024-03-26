import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { getStoredRead } from '../../utility/localStorage';
import ReadBook from '../readBook/ReadBook';
import { useEffect, useState } from 'react';

ReadBooks.propTypes = {
    listedBooks: PropTypes.array
};

function ReadBooks() {
    const allBooks = useLoaderData()
    const localStorageReadList = getStoredRead();
    const listedBooks = allBooks.filter(book => localStorageReadList.includes(book.id))

    const [books,setBooks] = useState([])

    useEffect(()=>{
        setBooks(listedBooks)
    },[listedBooks])

    return (
        <div className='grid gap-8'>
            {
                books.map(listedBook=> <ReadBook key={listedBook.id} listedBook={listedBook}></ReadBook>)
            }
        </div>
    );
}

export default ReadBooks;