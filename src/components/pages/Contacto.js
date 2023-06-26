import React from 'react';
import Footer from '../Footer';
import '../Style/NuestraProvincia.css'
import muni from '../../images/ImagenesContenido/alcaldia.jpg'

export default function Contacto() {
  return (
    <>
    {/* <h1 className='products'>UBICACION</h1> */}
    <h1 className="tituloPestañas contenedorTitulo">Contacto</h1>

    <div className='contenido'>
      <div className='contenedorTexto'>
        <h3 className='estiloTexto'>Dirección: Jr. César Vallejo Nro. 109, Plaza de Armas de Urcos, Quispicanchi.</h3>
        <h3 className='estiloTexto'>Cusco - Perú</h3>
        <h3 className='estiloTexto'>Número de celular:  993421451</h3>
        <h3 className='estiloTexto'>Correo Electronico: muniquispicanchi2023.2026@gmail.com</h3>
      </div>
    </div>

    {/* contenido de alcaldia */}
    <h2>Contenido de contacto</h2>

    <div>
      <Footer/> 
    </div>
    </>
  );
  
}