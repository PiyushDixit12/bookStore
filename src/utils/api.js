// Simulate fetching book data from a mock API
import {data} from './Fakedata'
import {bookInfo} from './Fakedata';
// const data = [
//     {
//         "id": 5,
//         author: "xyz",
//         category: "fiction",
//         title: "Norwegian Wood",
//         image: "http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec",
//         price: 296,
//         "releaseDate": "1987",
//         "isbn": "hj846"
//     },
//     {
//         "id": 6,
//         author: "Sbi",
//         category: "non-fiction",
//         title: "Kafka on the Shore",
//         image: "http://t0.gstatic.com/images?q=tbn:ANd9GcRHFU_j93PPsbQGqoaZJnHH6-Emk_sIxG823SkoRTL0nvdEP41f",
//         price: 505,
//         "releaseDate": "2002",
//         "isbn": "op012"
//     },
//     {
//         "id": 7,
//         author: "piyushd",
//         category: "fiction",
//         title: "After Dark",
//         image: "http://t3.gstatic.com/images?q=tbn:ANd9GcQBMNA8A19vQpNY4bkgadsLhiRUFqBKwKAA6ANrw8VEtOiPrYQJ",
//         price: 208,
//         "releaseDate": "2004",
//         "isbn": "cv456"
//     },
//     {
//         "id": 8,
//         author: "krishna",
//         category: "non-fiction",
//         title: "1Q84",
//         image: "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL",
//         price: 928,
//         "releaseDate": "2009",
//         "isbn": "al207"
//     },{
//         "id": 1,
//         author: "xyz",
//         category: "fiction",
//         title: "Norwegian Wood",
//         image: "http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec",
//         price: 296,
//         "releaseDate": "1987",
//         "isbn": "hj846"
//     },
//     {
//         "id": 2,
//         author: "Sbi",
//         category: "non-fiction",
//         title: "Kafka on the Shore",
//         image: "http://t0.gstatic.com/images?q=tbn:ANd9GcRHFU_j93PPsbQGqoaZJnHH6-Emk_sIxG823SkoRTL0nvdEP41f",
//         price: 505,
//         "releaseDate": "2002",
//         "isbn": "op012"
//     },
//     {
//         "id": 3,
//         author: "piyushd",
//         category: "fiction",
//         title: "After Dark",
//         image: "http://t3.gstatic.com/images?q=tbn:ANd9GcQBMNA8A19vQpNY4bkgadsLhiRUFqBKwKAA6ANrw8VEtOiPrYQJ",
//         price: 208,
//         "releaseDate": "2004",
//         "isbn": "cv456"
//     },
//     {
//         "id": 4,
//         author: "krishna",
//         category: "non-fiction",
//         title: "1Q84",
//         image: "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL",
//         price: 928,
//         "releaseDate": "2009",
//         "isbn": "al207"
//     },{
//         "id": 10,
//         "title": "War and Peace",
//         "author": "Leo Tolstoy",
//         "releaseDate": 1869,
//         category: "fiction",
//         price: 928,
//         "genre": [
//             "Historical Fiction",
//             "Epic"
//         ],
//         "description": "A monumental work depicting the events of Russian society during the Napoleonic era.",
//         "image": "https://fakeimg.pl/667x1000/cc6600"
//     }

// ];
export const fetchBooks = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        },1000);
    });
};

// Simulate fetching a single book by ID from a mock API
export const fetchBookById = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            let findByIdData = bookInfo.find((value) => id == value.book_id);
            console.log("find by id data is ",findByIdData);
            resolve(findByIdData);
        },1000);
    });
};
