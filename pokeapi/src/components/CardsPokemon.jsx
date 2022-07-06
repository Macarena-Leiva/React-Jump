import React from 'react';
import { UseFetch } from '../components//UseFetch';

export const CardsPokemon = ({url}) => {
    
    const estado = UseFetch(url)
    const {cargando,data}=estado

  return (
    <div className='padre'>
        {
            cargando
            ?
            <h1>Cargando</h1>
            :
            <div className='card' >
                <div className='cardTitle'>
                    <h4>{data.id}</h4>
                </div>
                <div className='cardBody'>
                    <img src={data.sprites.front_default} alt="Pokemon" />
                </div>
                <div className='cardNombre'>
                    <h5>{data.forms[0].name}</h5>
                </div>
            </div>
        }
    </div>
  )
}
