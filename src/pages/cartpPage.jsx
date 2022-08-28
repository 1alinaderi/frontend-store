import Header from "../header/header";
import "../App.css"
import ItemCart from "../itemCart/itemCart";
import Context from "../context/context";
import { useContext } from "react";

const CartPage = () => {

    const context = useContext(Context)

    return (
    <>
    <Header/>
    <div className="main-cart">
        
        <div className="items-in-cart">
            {context.addingCart.length === 0 ?
            <h1 style={{textAlign:"center",marginTop:"160px"}}>your cart is empty<br></br>chose one item</h1>:
             context.addingCart.map((e)=>{
                return(
                    <ItemCart
                        name={e.itemName}
                        description={e.itemDescription}
                        price={e.itemPrice}
                        rate={e.itemRate}
                        image={e.itemImage}
                        category={e.itemCategory}
                        itemId={e.itemid}
                    />             
                )
               })}
        </div>
        <div className="bill">
            <div> 
                <div id="count-item">
                    <p>count</p>
                    <p>{context.addingCart.length}</p>
                </div>
                <div id="price-item">
                    <p>price</p>
                    <p><i className="fa-solid fa-dollar-sign"></i>{context.addingCart.reduce((sum,currnet)=>sum+currnet.itemPrice , 0)} </p>
                </div>
            </div>
            <div>
                <button style={{marginBottom:"1px"}} className="btn-buy">Complete the purchase</button>
                <p className={context.transfer ? "d-none" : "d-block"} >you most login for Complete the purchase</p>
            </div>          
           
        </div>
    </div>
    </> );
}
 
export default CartPage;