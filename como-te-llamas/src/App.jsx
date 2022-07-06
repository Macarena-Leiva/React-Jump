import React, {useState} from 'react';

export function App(){
    const [state, setState] =useState({nombre: '',
    apellidos: [
       '',   // Materno
       ''    // Paterno
    ]});
  
    const cambiarValorNombre = (e) => {
        setState({...state,nombre: e.target.value}) 
    }

    const cambiarValorApellido = (e) => {
        e.target.id === '1' ? setState({...state,apellidos:[ e.target.value, state.apellidos[1]]}) : setState({...state,apellidos:[state.apellidos[0], e.target.value]})
    }
 
    return (
<div className='margen'>
       
   <div className='box1'>
        {/* <input value={state.nombre} onChange={(e) => setState({...state,nombre: e.target.value})} placeholder='Nombre'  /> */}

        <input value={state.nombre} onChange={cambiarValorNombre} placeholder='Nombre'  />
{/* 
        <input value={state.apellidos.length[0]} onChange={(e) => setState({...state,apellidos:[ e.target.value, state.apellidos[1]]})} placeholder='Apellido Materno' /> */}

        
        <input id='1' value={state.apellidos.length[0]} onChange={cambiarValorApellido} placeholder='Apellido Materno' />

        {/* <input value={state.apellidos.length[1]} onChange={(e) => setState({...state,apellidos:[state.apellidos[0], e.target.value]})} placeholder='Apellido Paterno' /> */}

        <input value={state.apellidos.length[1]} onChange={cambiarValorApellido} placeholder='Apellido Paterno' />

   </div>

  <div className='box2'>
      <h2>Mi nombre es:</h2>
      <h1>{state.nombre} {state.apellidos[0]} {state.apellidos[1]} </h1>
  </div>

</div>
    );
  }

