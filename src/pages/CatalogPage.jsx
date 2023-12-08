// import React,{useState,useEffect} from 'react';
// import BookList from '../component/BookList';
// // import SearchBar from '../component/SearchBar';
// // import {fetchBooks} from '../utils/api';

// function CatalogPage() {
//     const [books,setBooks] = useState([
//         {
//             "id": 5,
//             author: 4,
//             category: "fiction",
//             title: "Norwegian Wood",
//             image: "http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec",
//             price: 296,
//             "releaseDate": "1987",
//             "isbn": "hj846"
//         },
//         {
//             "id": 6,
//             author: 4,
//             category: "non-fiction",
//             title: "Kafka on the Shore",
//             image: "http://t0.gstatic.com/images?q=tbn:ANd9GcRHFU_j93PPsbQGqoaZJnHH6-Emk_sIxG823SkoRTL0nvdEP41f",
//             price: 505,
//             "releaseDate": "2002",
//             "isbn": "op012"
//         },
//         {
//             "id": 7,
//             author: 4,
//             category: "fiction",
//             title: "After Dark",
//             image: "http://t3.gstatic.com/images?q=tbn:ANd9GcQBMNA8A19vQpNY4bkgadsLhiRUFqBKwKAA6ANrw8VEtOiPrYQJ",
//             price: 208,
//             "releaseDate": "2004",
//             "isbn": "cv456"
//         },
//         {
//             "id": 8,
//             author: 4,
//             category: "non-fiction",
//             title: "1Q84",
//             image: "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL",
//             price: 928,
//             "releaseDate": "2009",
//             "isbn": "al207"
//         }
//     ]);
//     const [filteredBooks,setFilteredBooks] = useState(books);

//     // useEffect(() => {
//     //     // Simulate fetching data from API
//     //     fetchBooks().then(data => {
//     //         setBooks(data);
//     //         setFilteredBooks(data);
//     //     });
//     // },[]);

//     const handleCategoryFilter = category => {
//         if(category === 'all') {
//             setFilteredBooks(books);
//         } else {
//             const filtered = books.filter(book => book.category === category);
//             setFilteredBooks(filtered);
//         }
//     };

//     const handleSearch = searchTerm => {
//         const filtered = books.filter(
//             book =>
//                 book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 book.author.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredBooks(filtered);
//     };

//     return (
//         <div>
//             <h1>Book Catalog</h1>
//             {/* <SearchBar onSearch={handleSearch} /> */}
//             <BookList books={filteredBooks} onCategoryFilter={handleCategoryFilter} />
//         </div>
//     );
// }

// export default CatalogPage;

import React,{useState,useEffect} from 'react';
import BookList from '../component/BookList';
import SearchBar from '../component/SearchBar';
import {fetchBooks} from '../utils/api';
import {fetchApiBooks} from '../utils/fetchApi';

function CatalogPage() {

    const [books,setBooks] = useState([]);
    const [filteredBooks,setFilteredBooks] = useState([]);
    useEffect(() => {
        // Simulate fetching data from API
        fetchBooks().then(data => {
            setBooks(data);
            console.log("data",data)
            setFilteredBooks(data);
        });
    },[]);

    // useEffect(() => {
    //     fetchApiBooks("fiction").then((data) => {
    //         setBooks(data);
    //         console.log(data," ======================data======================")
    //         setFilteredBooks(data)
    //     });

    // },[]);

    const handleCategoryFilter = category => {
        if(category === 'all') {
            setFilteredBooks(books);
        } else {
            const filtered = books.filter(book => book.category === category);
            setFilteredBooks(filtered);
        }
    };

    const handleSearch = searchTerm => {
        const filtered = books.filter(
            book =>
                book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(filtered);
    };

    return (
        <>
            {books?.length ?
                <div className=' container-fluid w-100 h-100 overflow-auto p-0 m-0'>
                    <SearchBar onSearch={handleSearch} onCategoryFilter={handleCategoryFilter} />
                    <BookList books={filteredBooks} />
                </div> : <div className=' position-absolute top-50 start-50 '> <h1>Loading....</h1></div>}
            {!filteredBooks?.length && books && <h1>  No data found </h1>}
        </>
    );
}

export default CatalogPage;
