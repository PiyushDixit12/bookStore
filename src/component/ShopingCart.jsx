import React,{useEffect,useState} from 'react';
import {RxCrossCircled} from "react-icons/rx";
import {CheckOutForm} from './CheckOutForm';
function ShoppingCart({cart,onCheckout}) {
    const carts = localStorage.getItem("bookCart");
    const [cartData,setCartData] = useState(cart);
    if(carts) {
        let mainCarts = JSON.parse(carts);
        console.log(mainCarts);
        console.log("show the carts on shopping cart ======================")
    }
    const [totalCartState,setTotalCartState] = useState();
    let total = 0;
    useEffect(() => {
        cartData?.forEach((value) => {
            total += value.pages;
        });
        setTotalCartState(total);
        localStorage.setItem("bookCart",JSON.stringify(cartData));
    },[cartData]);

    return (
        <div>
            <div
                className=" border border-3 mx-0  w-100   py-3 px-2"
            >
                <table className=" w-100 p-0 m-0 ">
                    <tbody className=" w-100 p-0 m-0  ">
                        <tr className="row  p-0 m-0   my-2 ms-1 border-bottom border-bottom-2" >
                            <td className="sc-pic col-4 offset-md-1" >
                                <h6 className="text-center"> image </h6>
                            </td>
                            <td className=" col-4 d-flex justify-content-center align-items-center ">
                                <div className=" d-flex justify-content-between w-100 ">
                                    <h6 className=" w-25">price</h6>
                                    <h6 className="text-center w-75">name</h6>
                                </div>
                            </td>
                            <td className=" col-2 d-flex justify-content-center align-items-center ">
                                Delete
                            </td>
                        </tr>
                        {cartData.map((item,ind) => (

                            <tr className="row w-100  my-2 ms-1 border rounded-3" >
                                <td className="sc-pic col-4 offset-md-1 text-center" >
                                    <img src={item.cover} alt="" className=" img-fluid" width="100px" height="40px" />
                                </td>
                                <td className=" col-4 d-flex justify-content-center align-items-center ">
                                    <div className=" d-flex flex-column flex-lg-row justify-content-between w-100 ">
                                        <p className=" w-25">${item.pages}</p>
                                        <h6 className="text-center w-75">{item.name}</h6>
                                    </div>
                                </td>
                                <td className=" col-2 d-flex justify-content-center align-items-center " onClick={() => {
                                    console.log("button click");
                                    setCartData(cartData.filter((value,index) => {
                                        return ind !== index;
                                    }));


                                }}>
                                    <RxCrossCircled size={30} className=' text-danger' />
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div
                className=" border border-2   my-3 mx-auto py-2 rounded-3 d-flex flex-column flex-md-row justify-content-between px-lg-5 "
            >
                <div className=" py-2">
                    <span className=" fw-bolder fs-4 ps-5">Total:</span>
                    <h4 className=" float-end  ps-5">${totalCartState}</h4>
                </div>
                {/* <button onClick={onCheckout} className=" btn btn-outline-primary " >Proceed to Checkout</button>
                 */}
                <CheckOutForm />
            </div>
            <br />
        </div>
    );
}

export default ShoppingCart;
