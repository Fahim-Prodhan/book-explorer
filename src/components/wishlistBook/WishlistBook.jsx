import PropTypes from 'prop-types';
import locationImg from '../../assets/img/loaction.svg'
import profileImg from '../../assets/img/profile.svg'
import pageImg from '../../assets/img/page.svg'

WishlistBook.propTypes = {
    wishlistBook: PropTypes.object
};

function WishlistBook({ wishlistBook }) {
    const { bookName, author, image, tags, publisher, yearOfPublishing, totalPages,category, rating } = wishlistBook
    return (
        <div className='font-workSans'>
            <div className="card bg-base-100 shadow-xl border border-[#13131326]">
                <div className="card-body">
                    <div className='grid md:grid-cols-12'>
                        <div className='md:w-3/4 col-span-3 rounded-2xl bg-[#1313130d] py-6 px-12'>
                            <img src={image} alt="" />
                        </div>
                        <div className='col-span-9'>
                            <h1 className='font-playfair text-[24px] font-bold'>{bookName}</h1>
                            <p className='pt-4 pb-5 font-medium'>By: {author}</p>


                            <div className='flex md:items-center gap-6 flex-col md:flex-row'>
                                <div>
                                    <p className='font-bold'>Tag</p>
                                </div>
                                <div className='flex gap-4'>
                                    {
                                        tags.map((tag, index) => <p
                                            className=' text-center px-4 py-2 bg-[#23be0a0d] rounded-[30px] text-[#23BE0A]' key={index}>#{tag}
                                        </p>)
                                    }
                                </div>
                                <div className='flex gap-4'>
                                    <img src={locationImg} alt="" />
                                    <p>Year of Publishing: {yearOfPublishing}</p>
                                </div>
                            </div>

                            <div className='flex  nd:gap-6 flex-col md:flex-row'>
                                <div className='flex gap-4 mt-6'>
                                    <img src={profileImg} alt="" />
                                    <p>Publisher: {publisher}</p>
                                </div>
                                <div className='flex gap-4 mt-6'>
                                    <img src={pageImg} alt="" />
                                    <p>Publisher: {totalPages}</p>
                                </div>
                            </div>

                            <div className='my-4'>
                                <hr />
                            </div>

                            <div className='grid md:grid-cols-4 gap-3'>
                                <p className=' text-center px-4 py-2 bg-[#328eff26] rounded-[30px] text-[#328EFF]'>Category: {category}</p>
                                <p className=' text-center px-4 py-2 bg-[#ffac3326] rounded-[30px] text-[#FFAC33]'>Rating: {rating}</p>
                                <p className=' text-center px-4 py-2 bg-[#23BE0A] rounded-[30px] text-[#fff]'>View Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishlistBook;