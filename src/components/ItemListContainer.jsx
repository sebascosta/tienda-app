import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'


export default function ItemListContainer({hola}) {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {

        
      fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(res => setPersonajes(res.results))
        .catch(err => console.error(err))
      
    }, [])
    

return(
    <div>
        <ItemList personajes={personajes}/>

    </div>
)
}

