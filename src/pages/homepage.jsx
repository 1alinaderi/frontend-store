import Banner from "../banner/banner";
import BestCard from "../bestCard/bestCard";
import Category from "../category/category";
import Footer from "../footer/footer";
import Header from "../header/header";
import SpecialNews from "../specialNews/specialNews";
import "../App.css"
import { Link } from "react-router-dom";

const HomePage = () => {
    return ( <>
        <Header/>
        <Banner/>
        <div className='title-best-card'>
          <i className="fa-solid fa-circle-chevron-down"></i>
          <i className="fa-solid fa-circle-chevron-down"></i>
          <h2 style={{textAlign:"center", fontSize:"40px",paddingTop:"10px"}} >BEST ITEM</h2>
          <i className="fa-solid fa-circle-chevron-down"></i>
          <i className="fa-solid fa-circle-chevron-down"></i>
        </div>      
        <BestCard />
        <SpecialNews/>
       <div className='title-best-card'>
       <i className="fa-solid fa-circle-chevron-down"></i>
        <i className="fa-solid fa-circle-chevron-down"></i>
        <h2 style={{textAlign:"center", fontSize:"40px",paddingTop:"10px"}} >CATEGORY</h2>
        <i className="fa-solid fa-circle-chevron-down"></i>
        <i className="fa-solid fa-circle-chevron-down"></i>
       </div>
       <Link to={"/all-items"}><div className="all-items"><h1>All Items</h1></div></Link>
        <Category/>
        <Footer/>
      </>  );
}
 
export default HomePage;