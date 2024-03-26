import { useEffect, useState } from 'react';

import Book from '../book/Book';

function Books() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div >
            <h1 className='text-center text-[#131313] font-playfair font-bold text-[40px] mb-6'>Books</h1>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    books.map((book) => <Book book={book} key={book.id}></Book>)
                }
            </div>
        </div>

    );
}

export default Books;