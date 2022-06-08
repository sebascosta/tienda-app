import React from 'react'
import Item from './Item'

export default function ItemList({personajes}) {
  return (
    <div className="flex">
      {personajes?.map(personaje =><Item key={personaje.id} personaje ={personaje}/>)}

    </div>
  )
}
