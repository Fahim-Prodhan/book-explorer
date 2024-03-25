import PropTypes from 'prop-types';

WishlistBook.propTypes = {
    wishlistBook: PropTypes.object
};

function WishlistBook({wishlistBook}) {
    const {bookName,author,image,tags,publisher,yearOfPublishing} = wishlistBook
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
}

export default WishlistBook;