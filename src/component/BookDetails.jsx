import React from 'react';
import {useNavigate} from 'react-router-dom/dist';

function BookDetails({book}) {
    const navigate = useNavigate();
    return (
        <div className=" row p-3 mx-2  w-auto mt-5 mb-2  border border-3 rounded-3 overflow-y-auto  overflow-x-hidden">

            <div className=" col-lg-4 d-flex justify-content-around ">
                <img src={book.cover} className="img-fluid " alt={book.title} />
            </div>
            <div className=" col-lg-8   text-wrap" >
                <h5><span className=" fst-italic  fs-5 fw-bold"> Name :-</span> {book.name}</h5>
                <p> <span className=" fst-italic  fs-5 fw-bold"> author:- </span> {book.authors?.[0]}</p>
                <p>  <span className=" fst-italic  fs-5 fw-bold">discountPrice :- </span> ${book.pages}</p>
                <p> <span className=" fst-italic  fs-5 fw-bold"> published_date :- </span>{book.published_date}</p>
                <span className=" fst-italic  fs-5 fw-bold"> url:-</span> <a href={book.url}>{book.url}</a><br />
                <span className=" fst-italic  fs-5 fw-bold"> Discription :-</span>

                <p className="w-100 text-wrap  overflow-y-auto  overflow-x-hidden border p-3" style={{height: "400px",breakWord: "break-all"}}>{book.synopsis}</p>
                <div className=" d-flex justify-content-around">
                    <button className=" rounded-3 ms-lg-3  px-3 py-2 btn btn-outline-primary" onClick={() => {
                        let localStorageData = [];
                        if(localStorage.getItem("bookCart")) {
                            const bookCart = localStorage.getItem("bookCart");
                            localStorageData = JSON.parse(bookCart);
                        }
                        // localStorageData = localStorageData.map(element => {
                        //     if(element.book_id == book.book_id) {
                        //         console.log("element======================",element);
                        //         return {...element,count: element.count + 1}
                        //     };
                        //     return element;
                        // });
                        localStorageData.push({...book});
                        console.log(localStorageData);
                        localStorage.setItem("bookCart",JSON.stringify(localStorageData));
                        alert(" succefully added to cart")
                    }}>Add to Cart</button>
                    <button className=" rounded-3 ms-lg-3  px-3 py-2 btn btn-outline-success" onClick={() => {
                        navigate('/checkout')
                    }} >  View Carts</button>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
