import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { getStoredRead } from '../../utility/localStorage';
import ReadBook from '../readBook/ReadBook';
import ListedBook from '../listedBook/ListedBook';


ReadBooks.propTypes = {
    listedBooks: PropTypes.array
};

function ReadBooks() {
    const allBooks = useLoaderData()
    const localStorageReadList = getStoredRead();
    const listedBooks = allBooks.filter(book => localStorageReadList.includes(book.id))

    return (
        <div className='grid gap-8'>
            {
                listedBooks.map(listedBook=> <ReadBook key={listedBook.id} listedBook={listedBook}></ReadBook>)
            }
            <ListedBook listedBooks = {listedBooks}></ListedBook>
        </div>
    );
}

export default ReadBooks;