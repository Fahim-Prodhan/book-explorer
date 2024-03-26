
import { useLoaderData, useParams } from 'react-router-dom';

AuthorProfile.propTypes = {

};

function AuthorProfile() {
    const books = useLoaderData()
    const { id } = useParams()
    const book = books.find(book => book.id == id)

    return (
        <div className='flex mx-6 justify-center mt-12 font-workSans'>
            <div>
                <div className="card card-side bg-base-100 shadow-xl border border-[#13131326] md:flex-row flex-col">
                    <figure className='w-50 px-12 pt-6 md:w-80'><img className='rounded-lg' src={book.authorProfile[1]} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {book.authorProfile[0]}</h2>
                        <p className='font-medium'>Date Of Birth: {book.authorProfile[2]} <span><br /></span>
                            <span>Book Name: {book.bookName}</span> <span><br /></span>
                            <span>Country: {book.authorProfile[3]}</span></p>
                        <div className='w-40 mt-6'>
                            <img src={book.image} alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default AuthorProfile;