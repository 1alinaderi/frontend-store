import { useState } from "react";
import "../App.css"
import {Link} from "react-router-dom";
import Context from "../context/context";
import { useContext } from "react";


const LoginPage = () => {
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const phoneregex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
    
    const [inputval,setinputval]=useState("");
    const [regexError,setregexError]=useState(true);
    
    const context = useContext(Context)

    async function handleClick(){
        const emailRegex = emailregex.test(inputval)
        const phoneRegex = phoneregex.test(inputval)

        if (emailRegex || phoneRegex) {
            setregexError(true)
        }else{
            setregexError(false)
        }

        await context.settransfer(true)
    }


    return ( 
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"726px"}}>
        <div style={{width:"400px",border:"solid 2px black",borderRadius:"9px",padding:"20px"}}>
            <h1 style={{textAlign:"center"}} >STORE</h1>
            <p style={{marginTop:"20px",marginBottom:"3px",textAlign:"center"}}>enter your email or phone for buying from this store</p>
            <form onClick={(e)=>{e.preventDefault()}}>
            <input value={inputval} onChange={(e)=>{setinputval(e.target.value)}} style={{marginTop:"20px",marginBottom:"10px",width:"100%",height:"40px",border:"solid 2px black",borderRadius:"9px",padding:"15px"}} type={"text"} />
            <small className={`${regexError ? 'd-none' : 'd-block' }`}>enter true email or phone</small>
            
            <Link to={context.transfer ? '/cart' : '/login'}><button onClick={(e)=>handleClick()} className="btn-buy">Enter</button></Link>
            </form>

        </div>
    </div>
     );
     
}
 
export default LoginPage;