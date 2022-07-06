import React from 'react'
import { CardsPokemon } from './CardsPokemon'

export const Cards = ({results}) => {
  return (
    <div className='container'>
        <ul className='cards'>
          {
            results.map(p=>(
            <li className ='cardItem' key={p.name}>
              <CardsPokemon url={p.url} />
            </li>
            ))
          }
        </ul>
    </div>
  )
}

