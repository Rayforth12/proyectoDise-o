import React from 'react';
import './MenuPrincipal.css';

function MenuPrincipal() {


  return (
    <div>
      <div className='menuPrincipal'>
        <label className='titulo'>MENU</label>
        <button className='gestionar-personal'>Gestionar Personal</button>
        <button className='planTrabajo'>Plan de Trabajo</button>
        <button className='equipoTrabajo'>Equipo de trabajo</button>
        <button className='estudiantes'>Estudiantes</button>
        <button className='consultas'>Consultas</button>
        <button className='salir'>Salir</button>
      </div>
    </div>
  );
}

export default MenuPrincipal;