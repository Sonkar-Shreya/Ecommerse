import { useEffect,useState } from "react"
import Products from "../component/Products";


function Product(){
  const[data,setData] = useState({});
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((result)=>result.json())
    .then((response)=>{
      setData(response)
      console.log(response);
    })

  },[])
  return(
    <div className="bg-gray-100 mt-20 ">
      
        <div className="flex justify-center flex-wrap w-11/12 mx-auto ">
        {

        data?.products?.map((element,index)=>{
          return(
           
            <div key={index} >
             <Products ele={element} ind={index} />
            </div>
          )
        })
        }
      </div>
    </div>
  )
}
export default Product