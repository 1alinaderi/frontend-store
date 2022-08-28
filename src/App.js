import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
import "./App.css"
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginPage";
import CartPage from "./pages/cartpPage";
import Context from "./context/context";
import { useState } from "react";
import WClothingPage from "./pages/wClothingPage";
import MClothingPage from "./pages/mClothingPage";
import Jewelery from "./pages/jewerlyPage";
import Electronics from "./pages/electronicsPage";
import AllItems from "./pages/allItems";


function App() {
  
  const [addCart,setaddCart]=useState([]);
  const [transfer,settransfer]=useState(false);

  return (
    <Context.Provider value={{addingCart:addCart  , setaddingCart : setaddCart , transfer : transfer , settransfer : settransfer}}>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/category-women-clothing" element={<WClothingPage/>} />
      <Route path="/category-men-clothing" element={<MClothingPage/>} />
      <Route path="/category-jewelery" element={<Jewelery/>} />
      <Route path="/category-electronics" element={<Electronics/>} />
      <Route path="/all-items" element={<AllItems/>} />


    </Routes>
    </Context.Provider>
   
  );
}

export default App;
