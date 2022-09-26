import { useEffect ,useState} from "react";
import {useParams} from "react-router-dom"

function ProductDetail(props){
    const cart=props.cart;
    const setCart=props.setCart;
    const [detail,setDetail] = useState({})
    let { id } = useParams();
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then((result)=>result.json())
        .then((response)=>{
            setDetail(response);
        })

    },[])

    function addToCart(){
        const cartItem={
         price: detail.price,
         title: detail.title,
         id: id,
         thumbnail: detail.thumbnail,
         qty:1

        }
        const array= cart.filter((e)=>{
            return (e.id===id)
        })
        if(array.length===1) {
            const newCart = cart.map((product, ind) => {
                if(product.id === id){
                    product.qty += 1;
                }
                return product; 
            })

            setCart(newCart)
        }
        else setCart([...cart,cartItem])
    }
    return(
        <div key={id}>
            <div   className="flex justify-center ">
                {detail?.images?.map((ele)=>{
                return(
                    <div    >
                        <img src={ele} alt="image"  className="h-96 w-80 "/>
                    </div>
                )
            })}
            </div>
            <div>{detail?.description}</div>
            <div className="text-2xl">Price: {detail?.price}$</div>
            <div>{detail?.title}</div>
            <div>Brand: {detail?.brand}</div>
            <div>Rating: {detail?.rating}</div>
            <div>Discount: {detail?.discount}</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={addToCart}>ADD to Cart</button>
        </div>
    )
}
export default ProductDetail;