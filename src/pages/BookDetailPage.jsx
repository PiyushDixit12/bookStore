import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import BookDetails from '../component/BookDetails';
import {fetchBookById} from '../utils/api';
import {fetchApiBookById} from '../utils/fetchApi';

function BookDetailPage() {
    const {id} = useParams();
    const [book,setBook] = useState(null);

    useEffect(() => {
        // Simulate fetching data from API
        // fake data 2=3
        // fetchBookById(id).then(data => setBook(data));

        // fetch from api 
        fetchApiBookById(id).then(data => setBook(data));
    },[id]);

    return (
        <div>
            {book ? <BookDetails book={book} /> : <p>Loading...</p>}
        </div>
    );
}

export default BookDetailPage;

