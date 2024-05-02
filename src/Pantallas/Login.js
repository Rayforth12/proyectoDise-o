import React from 'react';
import './Login.css';
import usuario from '../Imagenes/usuario.png';

function Login() {


  return (
    <div>
      <div className='login'>
        <label className='titulo'>EQUIPO GUIA DE PRIMER INGRESO</label>
        <img src={usuario} alt='Usuario' className='imagen-usuario' />
        <label className='usuarioLabel'>Usuario:</label>
        <input className='inputUsuarioLogin' type='text' placeholder='Ingresa tu usuario'></input>
        <label className='contrasennaLabel'>Contraseña:</label>
        <input className='inputContrasennaLogin' type='password' placeholder='Ingresa tu contraseña'></input>
        <button className='boton-ingresar'>Ingresar</button>
        <button className='boton-olvidar-contrasenna'>Olvidaste tu contraseña</button>
      </div>
    </div>
  );
}

export default Login;
