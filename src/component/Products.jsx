import { Link } from "react-router-dom";

function Products(props){
    // const { ele , ind} = props;
    const ele=props.ele;
    const ind=props.ind;
    return(
        <div key={props.ind} className="rounded-lg w-72 m-5 border-2 border-slate-400 hover:border-gray-500   ">
          <Link to={`/product/${ele?.id}`}>

              <div>
                <img src={ele?.thumbnail} className="h-80 w-full" />
              </div>
              <div className="p-5 bg-gray-50"> 
                <div>{ele?.title}</div>
                <div>{ele?.brand}</div>
                <div> Price: {ele?.price}$</div>
                <div>{ele?.rating}</div>
              </div>
          </Link>
        </div>
    )
}
export default Products 