import { useContext } from "react";
import Context from "../context/context";
import "./card.css"


const Card = (props) => {

    const context = useContext(Context)

    return ( 
    <div className="container-card">
        <div className="image-container" ><img src={props.image}/></div>
        <h3>{props.name}</h3>
        <p><i className="fa-solid fa-star"></i>{props.rate}</p>
        <h4><i className="fa-solid fa-dollar-sign"></i>{props.price}</h4>
        <button onClick={()=>{context.setaddingCart([...context.addingCart,{
            itemName:props.name ,
            itemImage:props.image ,
            itemPrice:props.price ,
            itemRate:props.rate,
            itemCategory:props.category,
            itemDescription:props.description, 
            itemid:props.productId    
            }])
            }} className="btn-buy">buy</button>
    </div>
    );
}
 
export default Card;