import React from 'react';
import './MenuPersona.css';


function MenuPersona() {


  return (
    <div>
      <div className='menuPersona'>
        <label className='tituloPersona'>Persona en linea</label>
        <button className='registrar-personal'>Registrar Personal</button>
        <button className='eliminar-personal'>Eliminar Personal</button>
        <button className='editar-personal'>Editar Personal</button>
        <button className='volver'>Volver</button>
      </div>
    </div>
  );
}

export default MenuPersona;