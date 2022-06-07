import React, { useState } from 'react';
import '../assets/cart.css';

export default function ItemCount({inicial, max, onAdd}) {
  
  const [count, setCount] = useState(inicial);


  const sumar = ()=> {
    if (count < max){
      setCount(count+1)
    }else{
      alert ("No hay más stock")
    }
  }

  const restar = ()=> {
    count > inicial ? setCount(count-1) : alert ("No puedes quitar más productos")
   }

  return (   
    <>          
        <div className="itemsDiv" >
          <div className="itemsDiv">
          desde: {count} 
          </div>            
            <br/>      
            <button className="buttons" onClick= {sumar}>+</button>         
                        
            <button className="buttons" onClick= {restar}>-</button>
         </div>
         <div className="itemsDiv">
           <button className="agregar" onClick= {()=>onAdd(count)}>Agregar al carrito</button>
         </div>
    </>
  )
}
