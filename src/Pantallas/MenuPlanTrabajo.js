import React from 'react';
import './MenuPlanTrabajo.css';


function MenuPlanTrabajo() {


  return (
    <div>
      <div className='menuPersona'>
        <label className='titulo'>Menu Plan de Trabajo</label>
        <label style = {{position: 'absolute', top: 100, left: 50, fontSize: 20, fontWeight: 'bold', color:'white'}} > Planes de Trabajo </label>
        <div className='tablaPlanes'></div>

        
        <button className='crearPlan'>Crear Plan de Trabajo</button>
        <button className='volverMenuPlanTrabajo'>Volver</button>
      </div>
    </div>
  );
}

export default MenuPlanTrabajo;