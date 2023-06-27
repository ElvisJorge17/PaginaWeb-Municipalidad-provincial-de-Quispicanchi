import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import '../../Style/NuestraProvincia.css'
import muni from '../../../images/ImagenesContenido/alcaldia.jpg'

export default function Alcaldia() {
  return (
    <>
    {/* <h1 className='products'>UBICACION</h1> */}
    <h1 className="tituloPestañas contenedorTitulo">Alcaldía</h1>
    <div className='contenido'>
      <div className='contenedorTexto'>
        <h1 className='estiloTitulo'>Contenido de Alcaldia</h1>
        <h3 className='estiloTexto'>La provincia de Quispicanchi es una de las trece provincias que conforman el departamento del Cuzco en el Sur del Perú.</h3>
      </div>
    </div>

    {/* contenido de alcaldia */}
    <img className='' src={muni} alt="muni" width={Alcaldia}/>

    <div>
      <Footer/> 
    </div>
    </>
  );
  
}