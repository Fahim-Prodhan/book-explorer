import PropTypes from 'prop-types';

import starIcon from '../../assets/img/Frame (1).svg'
import { Link } from 'react-router-dom';


Book.propTypes = {
    book: PropTypes.object
};

function Book({ book }) {

    const { bookName, author, image, tags, category, rating } = book

    return (
        <Link to={`/book/${book.id}`}>
            <div className='font-workSans'>
                <div className="card bg-base-100 shadow-xl border border-[#13131326]">
                    <div className="card-body">
                        <div className='mx-auto bg-[#F3F3F3] px-[100px] py-[48px] rounded-2xl '>
                            <img className='max-w-[144px] ' src={image} alt="" />
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            {
                                tags.map((tag, index) => <p
                                    className='mr-3 mt-6 px-5 py-3 bg-[#23be0a0d] rounded-[30px] text-[#23BE0A]' key={index}>{tag}
                                </p>)
                            }
                        </div>
                        <div className='mt-6'>
                            <h1 className='font-playfair text-2xl font-bold'>{bookName}</h1>
                            <p className='pt-6 font-medium'>By: {author}</p>
                        </div>
                        <div className='my-6'>
                            <hr />
                        </div>
                        <div className='flex'>
                            <p className='font-medium'>{category}</p>
                            <div className='flex gap-2'>
                                <p className='font-medium'>{rating}</p>
                                <img src={starIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Book;