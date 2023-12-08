import React,{useState} from 'react';

import ShoppingCart from '../component/ShopingCart';

function CheckoutPage() {
    let localStorageCart = [];
    if(localStorage.length > 0) {
        console.log("storage");
        const bookcart = localStorage.getItem("bookCart");
        if(bookcart) {
            console.log("bookcart",bookcart)
            localStorageCart = JSON.parse(bookcart);
        }
    }
    const [cart,setCart] = useState(localStorageCart);

    const handleCheckout = () => {
        console.log("checkout page : ")

    };

    return (
        <div>
            <ShoppingCart cart={cart} onCheckout={handleCheckout} />
        </div>
    );
}

export default CheckoutPage;
