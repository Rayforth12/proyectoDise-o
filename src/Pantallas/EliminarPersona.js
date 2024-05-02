
import React from 'react';
import './EliminarPersona.css';


function EliminarPersona() {

  return (
    <div>
      <div className='eliminarPersona'>
        <label className='titulo'>Persona en linea</label>
        <label style = {{position: 'absolute', top: 150, left: 50, fontSize: 20, fontWeight: 'bold', color:'white'}} > Identificación de la persona a eliminar </label>

        <input style = {{position: 'absolute', top: 150, left: 400, fontSize: 20}}  ></input>

        
        <button  className='eliminar' >Eliminar</button>
        <button  className='volverEliminar' >Volver</button>
               

      </div>
    </div>
  );

}

export default EliminarPersona;