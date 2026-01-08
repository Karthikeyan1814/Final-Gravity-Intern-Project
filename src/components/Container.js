import "./Container.css"
function Container({pname , mrp ,cardkey}){
    return(
        
            <div className="cards" key={cardkey}>
                <h3>Product Name : {pname}</h3>
                <h4 style={{color:"red"}}>MRP : {mrp}</h4>
            </div>
       
    )
}
export default Container