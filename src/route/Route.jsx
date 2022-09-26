import { Route,Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
function CustomRoute(props){
    const cart=props.cart;
    const setCart=props.setCart;
    return(
        <div>
            <Routes>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart}  />} />
                <Route  path="/" element={<Product cart={cart} setCart={setCart} />} />
                <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}
export default CustomRoute