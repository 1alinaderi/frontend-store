import { Link } from "react-router-dom";
import "./category.css"

const Category = () => {
    return ( 
        <div id="category-con" className="container-category">
           <Link to={"/category-jewelery"}>
            <div className="item-category">
                    <img className="img-category" src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" />
                    <h3>jewelery</h3>
                </div>
           </Link>
            <Link to={"/category-electronics"}>
                <div className="item-category">
                    <img className="img-category" src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" />
                    <h3>electronics</h3>
                </div>
            </Link>
           <Link to={"/category-men-clothing"}>
                <div className="item-category">
                    <img className="img-category" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
                    <h3>men's <br></br>clothing</h3>
                </div>
           </Link>
            <Link to={"/category-women-clothing"}>
                <div className="item-category">
                    <img className="img-category" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"/>
                    <h3>women's clothing</h3>
                </div>
            </Link>

        </div>
    );
}
 
export default Category;