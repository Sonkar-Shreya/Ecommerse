function Cart(props){
    const cart=props.cart;
    const setCart=props.setCart;

    console.log('cart in cartjs', cart)

    return(
        <div className="mt-10 pt-10">
            {   
                cart?.map((product,ind)=>{
                    return(
                        <div>
                            <div className="flex justify-evenly">
                                <div>
                                    <img src={product?.thumbnail}></img>
                                </div>
                                <div>
                                    <div>{product?.title}</div>
                                    <div className="text-lg font-bold">Price: {product?.price}</div>
                                    <div>Quantity:{product?.qty}</div>
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