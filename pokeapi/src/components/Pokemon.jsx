import React, {useState} from "react";
import { UseFetch } from "./UseFetch";
import { Cards } from "./Cards";



export const Pokemon = () =>{
    const[url,setUrl]= useState('https://pokeapi.co/api/v2/pokemon')
    const estado = UseFetch(url)
    const {cargando,data}=estado
   /*  cargando ? console.log('cargando'): console.log(data.results) */

    return(
    <div>
        <h1>Pokemon</h1>

        {
            cargando
            ?
            <h1>Cargando...</h1>
            :
            <div>
            <Cards results={data.results} />

            <div className="conteiner-btn">
                <button className="pulse" onClick={()=>setUrl(data.previous)}>Anterior</button>
                <button className="pulse" onClick={()=>setUrl(data.next)}>Siguiente</button>
            </div>
            </div>
        }

    </div>
    )
}

