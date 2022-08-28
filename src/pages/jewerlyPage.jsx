import Banner from "../banner/banner";
import Header from "../header/header";
import {fakedata} from "../fakedata/fakedata.js";
import Card from "../card/card";
import Footer from "../footer/footer";

const Jewelery = () => {
    const data = fakedata.filter(v=>v.category === "jewelery")
    return ( 
        <>
        <Header/>
        <Banner/>
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap", marginLeft:"2.1rem"}}>
            {data.map((p)=>{
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
            })}
        </div>
        <Footer />
        </>
         );
}
 
export default Jewelery;