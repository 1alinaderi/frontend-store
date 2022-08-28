import "./itemCart.css"
import Context from "../context/context";
import { useContext } from "react";

const ItemCart = (props) => {

    const context = useContext(Context)
    
    function handleDelete(id){
        context.setaddingCart(context.addingCart.filter(v=>v.itemid != id
        ))
    }

    return (  
        <div className="item-in-cart">
                <div className="item-image">
                    <img src={props.image}/>
                </div>
                <div className="descreption">
                    <h2>Name: </h2><h3>{props.name}</h3>
                    <h2>Description:</h2><p>{props.description}</p>
                    <div className={'item-footer'}>
                    <h3>Rate:<i className="fa-solid fa-star"></i>{props.rate}</h3>
                    <h3>Category: {props.category}</h3>                   
                    <h3>Price:<i className="fa-solid fa-dollar-sign"></i>{props.price}</h3>
                    <i onClick={()=>{handleDelete(props.itemId)}} className="fa-regular fa-circle-xmark"></i>
                    </div>
                </div> 
              
                
            </div>
    );
}
 
export default ItemCart;