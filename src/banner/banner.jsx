import "./banner.css"

const Banner = () => {    
    return ( 
    <div className="container">
        <div className="page1 active">
            <h1>banner is empty</h1>        
            <i onClick={(e)=>{e.currentTarget.parentElement.classList.remove("active");e.currentTarget.parentElement.parentElement.lastChild.classList.add("active")}} className="fa-solid fa-angle-left"></i>
            <i onClick={(e)=>{e.currentTarget.parentElement.classList.remove("active");e.currentTarget.parentElement.nextElementSibling.classList.add("active")}} className="fa-solid fa-angle-right"></i>
        </div>
        <div className="page2">
            <h1>banner is empty</h1>
            <i onClick={(e)=>{e.currentTarget.parentElement.classList.remove("active");e.currentTarget.parentElement.previousElementSibling.classList.add("active") }} className="fa-solid fa-angle-left"></i>
            <i onClick={(e)=>{e.currentTarget.parentElement.classList.remove("active");e.currentTarget.parentElement.nextElementSibling.classList.add("active")}} className="fa-solid fa-angle-right"></i>
        </div>
        <div className="page3">
            <h1>banner is empty</h1>
            <i onClick={(e)=>{e.currentTarget.parentElement.classList.remove("active");e.currentTarget.parentElement.previousElementSibling.classList.add("active") }} className="fa-solid fa-angle-left"></i>
            <i onClick={(e)=>{e.currentTarget.parentElement.classList.remove("active");e.currentTarget.parentElement.parentElement.firstChild.classList.add("active")}} className="fa-solid fa-angle-right"></i>
        </div>

    </div>
    );
}
 
export default Banner;