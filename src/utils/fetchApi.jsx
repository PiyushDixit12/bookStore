

// export const fetchApiBooks = async (type) => {
//     const url = `https://hapi-books.p.rapidapi.com/nominees/${type}/2020`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'edf0bcf650mshae9e9dc90d4b656p199038jsn5bc8222d5212',
//             'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url,options);
//         const result = await response.json();
//         console.log(result);
//         return result;
//     } catch(error) {
//         console.error(error);
//     }


//     // const url = `https://freebooks-api2.p.rapidapi.com/fetchEbooks/${type}`;
//     // const options = {
//     //     method: 'GET',
//     //     headers: {
//     //         'X-RapidAPI-Key': 'edf0bcf650mshae9e9dc90d4b656p199038jsn5bc8222d5212',
//     //         'X-RapidAPI-Host': 'freebooks-api2.p.rapidapi.com'
//     //     }
//     // };

//     // try {
//     //     const response = await fetch(url,options);
//     //     const result = await response.json();
//     //     console.log(result);
//     //     return result;
//     // } catch(error) {
//     //     console.error(error);
//     // }
// }


export const fetchApiBookById = async (book_id) => {
    const url = `https://hapi-books.p.rapidapi.com/book/${book_id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'edf0bcf650mshae9e9dc90d4b656p199038jsn5bc8222d5212',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url,options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch(error) {
        console.error(error);
    }
}
