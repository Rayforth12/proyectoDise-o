
import React from 'react';
import './EditarPersona.css';


function EditarPersona() {

  return (
    <div>
      <div className='editarPersona'>
        <label className='titulo'>Persona en linea</label>
        <label style = {{position: 'absolute', top: 150, left: 50, fontSize: 20, fontWeight: 'bold', color:'white'}} > Identificación de la persona a editar </label>

        <input style = {{position: 'absolute', top: 150, left: 400, fontSize: 20}}  ></input>

        
        <button  className='editar' >Editar</button>
        <button  className='volverEditar' >Volver</button>
               

      </div>
    </div>
  );

}

export default EditarPersona;