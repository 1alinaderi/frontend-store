import { useState } from "react";
import Card from "../card/card";
import {fakedata} from "../fakedata/fakedata.js";
import "./bestCard.css"

const BestCard = () => {
    
    

    let best = fakedata.filter((v=>{
        return (
        v.rating.rate > 4.5 
        ) 
    }))
    
    return(
    <div className="container-best-card">
       {best.map((p=>{
        return(
            <Card 
            name={p.title} 
            price={p.price} 
            rate={p.rating.rate} 
            image={p.image}
            description={p.description}
            category={p.category}
            productId={p.id}
            />
        )
       }))}
    </div>
   )
}
 
export default BestCard;
