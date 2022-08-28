import Banner from "../banner/banner";
import { fakedata } from "../fakedata/fakedata";
import Footer from "../footer/footer";
import Header from "../header/header";
import Card from "../card/card";


const AllItems = () => {
    return (
    <>
    <Header/>
    <Banner/>
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap", marginLeft:"2.1rem"}}>
        {fakedata.map((p)=>{
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
    <Footer/>
    </>
      );
}
 
export default AllItems;