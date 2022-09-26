import "./App.css";
import CustomRoute from "./route/Route";
import Navbar from "./component/Navbar"
import { useEffect, useState } from "react";

function App() {
  const localData = localStorage.getItem('cart');
  console.log('local data', localData)
  const [cart,setCart] = useState(JSON.parse(
    !!localData ? localData : '[]'
  ))
  useEffect(()=>{
    console.log("cart",cart)
  },[cart])
  function handleCart (updatedCart){
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  return (
    <div>
      <Navbar />

      <CustomRoute cart={cart} setCart={handleCart} />
    </div>
  );
}
export default App;
