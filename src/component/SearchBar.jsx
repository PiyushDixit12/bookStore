import React,{useState} from 'react';

function SearchBar({onSearch,onCategoryFilter}) {
    const [searchTerm,setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className=' row w-100 my-3 px-lg-5'>
            <div className=' col-12  col-md-6 m-3 m-lg-0' >
                <input
                    type="search"
                    placeholder="Search by title or author"
                    className='col-8 col-lg-8  p-2  rounded-start-2'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button className='col-3 col-lg-2 p-2 rounded-end-2' onClick={handleSearch}>Search</button>
            </div>
            <div className=' offset-lg-1 col-md-5  d-flex justify-content-end align-items-center '>

                <label className=' col-md-7 fs-6 d-flex align-items-center justify-content-end  px-lg-3' >Filter by Category:</label>
                <select
                    className=' col-md-5 p-2 rounded-3'
                    onChange={e => onCategoryFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                </select>

            </div>
        </div>
    );
}

export default SearchBar;
