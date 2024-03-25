import PropTypes from 'prop-types';

ReadBook.propTypes = {
    listedBook: PropTypes.object
};

function ReadBook({listedBook}) {
    console.log(listedBook);
    return (
        <div>
            <img src={listedBook.image} alt="" />
        </div>
    );
}

export default ReadBook;