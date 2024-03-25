import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { getStoredRead } from '../../utility/localStorage';
import ReadBook from '../readBook/ReadBook';

ReadBooks.propTypes = {
    listedBooks: PropTypes.array
};

function ReadBooks() {
    const allBooks = useLoaderData()
    const localStorageReadList = getStoredRead();
    const listedBooks = allBooks.filter(book => localStorageReadList.includes(book.id))

    return (
        <div>
            {
                listedBooks.map(listedBook=> <ReadBook key={listedBook.id} listedBook={listedBook}></ReadBook>)
            }
        </div>
    );
}

export default ReadBooks;