import React from 'react';
import {Button} from 'react-bootstrap';

function BookList({books,onCategoryFilter}) {
    return (
        <div className=' m-0 p-0 border' >
            <ul className=' row  text-decoration-none m-0 p-0 '  >
                {books.map(book => (
                    <li key={book.book_id} className=' col-md-6 col-lg-3 text-decoration-none list-unstyled rounded-2 m-0 p-2  '   >
                        <div className=' border  p-1 rounded-2'>
                            <img src={book.cover} alt={book.name} className='  rounded-2  w-100  h-50 ' />
                            {/* <img src={book.imgUrl} alt={book.title} className='  rounded-2  w-100  h-50 ' /> */}
                            <p className=' m-1 fs-4 '>{book.name}</p>
                            <p className=' m-1 fs-5 '><i>by : </i> {book.author}</p>
                            <p className=' m-1 fs-6 '>${book.price}</p>
                            <Button variant='dark' className=' w-100'>  <a className=' text-decoration-none text-white d-block p-0 m-0 w-100 h-100' href={`/book-details/${book.book_id}`}>View Details</a></Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;


{/* <img src={book.image} alt={book.title} className='  rounded-2  w-100  h-50 ' /> */}
{/* <img src={book.imgUrl} alt={book.title} className='  rounded-2  w-100  h-50 ' /> */}
// <p className=' m-1 fs-4 '>{book.title}</p>
// <p className=' m-1 fs-5 '><i>by : </i> {book.author}</p>
// <p className=' m-1 fs-6 '>${book.price}</p>
// <Button variant='dark' className=' w-100'>  <a className=' text-decoration-none text-white d-block p-0 m-0 w-100 h-100' href={`/book-details/${book.id}`}>View Details</a></Button>