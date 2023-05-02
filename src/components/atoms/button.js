import './button.css'

export default function Button(){

    function handleBreakfast(){
         
    }
    return (
    
      <div>
        <button className="btnStyle"
                onClick={handleBreakfast}
                 >Breakfast</button>
        <button className="btnStyle">Lunch</button>
        <button className="btnStyle">Dinner</button>
      </div>   
    )
}