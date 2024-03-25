import PropTypes from 'prop-types';

import starIcon from '../../assets/img/Frame (1).svg'


Book.propTypes = {
    book: PropTypes.object
};

function Book({ book }) {

    const { bookName, author, image, tags, category, rating } = book

    return (
        <div className='font-workSans'>
            <div className="card bg-base-100 shadow-xl border border-[#13131326]">
                <div className="card-body">
                    <div className='mx-auto bg-[#F3F3F3] px-[100px] py-[48px] rounded-2xl '>
                        <img className='max-w-[134px] ' src={image} alt="" />
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
                        <p className='pt-6'>By: {author}</p>
                    </div>
                    <div className='my-6'>
                        <hr />
                    </div>
                    <div className='flex'>
                        <p>{category}</p>
                        <div className='flex gap-2'>
                            <p>{rating}</p>
                            <img src={starIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;