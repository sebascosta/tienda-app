import React from 'react'

export default function ListadoUser({users}) {
  return   (    
        <>
       {users.map((item)=> (
           <p>Hola! {users}</p>))
           }
</>)
  
}
