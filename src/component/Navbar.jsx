import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="fixed top-0 bg-slate-200 h-20 border-2 border-slate-400  flex flex items-center  w-full px-5">
             <Link to={'/'} className="text-blue-500 text-4xl ">Ecommerce Site</Link>
            <input type="text" className="text-2xl border-1   border-black"/>
            <Link to={'/cart'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Cart</Link>
            <Link to={'/login'}>Login</Link>
        </div>
    )
}
export default Navbar