import React from 'react'
import {Route,Routes} from 'react-router-dom'
import CatalogPage from '../pages/CatalogPage'
import CheckOutPage from '../pages/CheckOutPage'
import BookDetailPage from '../pages/BookDetailPage'

function BookAppRoutes() {
    return (
        <>

            <Routes>
                <Route path='/' element={<CatalogPage />} />
                <Route path='/book-details/:id' element={<BookDetailPage />} />
                <Route path='/checkout' element={<CheckOutPage />} />
                <Route path='/*' element={<div> <p>No page available</p></div>} />
            </Routes>
        </>
    )
}

export default BookAppRoutes