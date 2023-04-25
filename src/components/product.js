import './product.css'

export default function Productcard({userDetail, alertFunction}){
    const {
        image,
        nav,
        details,
        price
     } = userDetail

     function Handle(){
        alert(nav)
     }

return(
  
     
<div className="wrapper">

    <img src={image} alt=""
          height = '130px'
          width = '190px'

    />

    <h4>{nav}</h4>
    <h4>{details}</h4>
    <h3 style={{color:'red'}}>{price}</h3>
    <button style={{backgroundColor:"red"}} onClick={Handle}>Add to cart</button>
    
   

</div>

    );
}