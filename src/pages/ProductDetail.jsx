import { useEffect ,useState} from "react";
import {useParams} from "react-router-dom"

function ProductDetail(props){
    const cart=props.cart;
    const setCart=props.setCart;
    const [detail,setDetail] = useState({})
    let { id } = useParams();
    const [imgId,setImgId] =useState(0);
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
        alert("Item added to cart")
    }
    const mouseEnter=(index)=>{
        setImgId(index);
    }
    return(
        <div key={id} className={'mt-10 pt-20 flex justify-between' }>
            <div className="flex items-center h-96 mt-10">

                <div  >
                    {detail?.images?.map((ele,index)=>{
                    return(
                        <div className=" m-2 border-2 border-gray-300 hover:border-gray-500" onMouseEnter={()=>mouseEnter(index)} >
                            <img src={ele} alt="image"  className="h-20 w-20 "/>
                        </div>
                    )
                })}
                </div>
                <div>
                    {
                        !!detail.images && <img src={detail?.images[imgId]} alt="image" className="w-full pl-20" />
                    }
                </div>
            </div>
            <div className="pr-40 pt-20">
                <div>{detail?.description}</div>
                <div className="text-2xl">Price: {detail?.price}$</div>
                <div>{detail?.title}</div>
                <div>Brand: {detail?.brand}</div>
                <div>Rating: {detail?.rating}</div>
                <div>Discount: {detail?.discount}</div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={addToCart}>
                    Delete
                </button>
            </div>
        </div>
    )
}
export default ProductDetail;