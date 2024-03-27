import starIcon from '../../assets/img/Frame (1).svg'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
TopRated.propTypes = {
    topBook: PropTypes.object
};

function TopRated({topBook}) {

    const { bookName, author, image, category, rating } = topBook

    return (
        <Link to={`/book/${topBook.id}`}>
            <div className='font-workSans'>
                <div className="card bg-base-100 shadow-xl border border-[#13131326]">
                    <div className="card-body">
                        <div className='mx-auto bg-[#F3F3F3] px-[60px] py-[48px] rounded-2xl'>
                            <img className='w-full' src={image} alt="" />
                        </div>
                        {/* <div className='flex flex-col md:flex-row'>
                            {
                                tags.map((tag, index) => <p
                                    className=' text-center mr-3 mt-6 px-4 py-2 bg-[#23be0a0d] rounded-[30px] text-[#23BE0A]' key={index}>{tag}
                                </p>)
                            }
                        </div> */}
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

export default TopRated;