import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from './Pantallas/Login';
import OlvidarContra from './Pantallas/OlvidarContra';
import MenuPrincipal from './Pantallas/MenuPrincipal';
import MenuPersona from './Pantallas/MenuPersona';
import RegistrarPersonal from './Pantallas/RegistrarPersonal';
import EliminarPersona from './Pantallas/EliminarPersona';
import EditarPersona from './Pantallas/EditarPersona';
import PersonaEditar from './Pantallas/PersonaEditar';
import PersonaEliminar from './Pantallas/PersonaEliminar';
import MenuEquipoTrabajo from './Pantallas/MenuEquipoTrabajo';
import EquipoTrabajo from './Pantallas/EquipoTrabajo';
import EditarEquipoTrabajo from './Pantallas/EditarEquipoTrabajo';
import BuscarEditarEquipo from './Pantallas/BuscarEditarEquipo';
import Estudiante from './Pantallas/Estudiante';
import PlanTrabajo from './Pantallas/PlanTrabajo';
import MenuPlanTrabajo from './Pantallas/MenuPlanTrabajo';
import VerPlanTrabajo from './Pantallas/VerPlanTrabajo';
import EditarPlanTrabajo from './Pantallas/EditarPlanTrabajo';
import CrearActividad from './Pantallas/CrearActividad';
import VerActividad from './Pantallas/VerActividad';
import ModificarActividad from './Pantallas/ModificarActividad';



export default function RoutesP() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Login />} /> 
        <Route path="/OlvidarContra" element={<OlvidarContra />} />
        <Route path="/MenuPrincipal" element={<MenuPrincipal />} />
        <Route path="/MenuPersona" element={<MenuPersona />} />
        <Route path="/RegistrarPersonal" element={<RegistrarPersonal />} />
        <Route path="/EliminarPersona" element={<EliminarPersona />} />
        <Route path="/EditarPersona" element={<EditarPersona />} />
        <Route path="/PersonaEditar" element={<PersonaEditar />} />
        <Route path="/PersonaEliminar" element={<PersonaEliminar />} />
        <Route path="/MenuEquipoTrabajo" element={<MenuEquipoTrabajo />} />
        <Route path="/EquipoTrabajo" element={<EquipoTrabajo />} />
        <Route path="/EditarEquipoTrabajo" element={<EditarEquipoTrabajo />} />
        <Route path="/BuscarEditarEquipo" element={<BuscarEditarEquipo />} />
        <Route path="/Estudiante" element={<Estudiante />} />
        <Route path="/PlanTrabajo" element={<PlanTrabajo />} />
        <Route path="/MenuPlanTrabajo" element={<MenuPlanTrabajo />} />
        <Route path="/VerPlanTrabajo" element={<VerPlanTrabajo />} />
        <Route path="/EditarPlanTrabajo" element={<EditarPlanTrabajo />} />
        <Route path="/CrearActividad" element={<CrearActividad />} />
        <Route path="/VerActividad" element={<VerActividad />} />
        <Route path="/ModificarActividad" element={<ModificarActividad />} />
        
      </Routes>
    </Router>
  );
}
