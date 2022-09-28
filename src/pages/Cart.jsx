import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Cart(props){

    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('userId')){
            alert('not logged in')
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        }
    }, [])

    const cart=props.cart;
    const setCart=props.setCart;
     function deleteItem(index){
        const item=cart;
        const newItem=item.filter((e,ind)=>{
            return ind!=index;
        })
        //qty is not decreased only delete the item from the cart
        setCart(newItem);

     }

    return(
        <div className="mt-10 pt-10">
            {   
                cart?.map((product,ind)=>{
                    return(
                        <div> 
                            <div className="flex justify-evenly bg-blue-200 p-5 m-3">
                                <div className="mt-6">
                                    <Link to={`/product/${product.id}`}><img src={product?.thumbnail}></img></Link>
                                </div>
                                <div>
                                    <Link to={`/product/${product?.id}`}><div>{product?.title}</div></Link>
                                    
                                    <div className="text-lg font-bold">Price: {product?.price}</div>
                                    <div>Quantity:{product?.qty}</div>
                                    <button
                                        type="button"
                                        onClick={(e)=>{deleteItem(ind)}}
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                    Delete
                                    </button>
                                </div>
                            </div>
                            <hr></hr>
                        </div>

                    )
                })
                
            }
        </div>
    )
}
export default Cart