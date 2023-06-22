import React from 'react';
import '../../../../App.css';
import Footer from '../../../Footer';
import '../../../Style/NuestraProvincia.css'
import muni from '../../../../images/ImagenesContenido/alcaldia.jpg'

export default function Comisiones() {
  return (
    <>
    {/* <h1 className='products'>UBICACION</h1> */}
    <h1 className="tituloPestañas contenedorTitulo">CONFORMACIÓN DE COMISIONES ORDINARIAS DE REGIDORES AÑO 2021
ACUERDO DE CONCEJO MUNICIPAL Nº 01-2021-MPQ/U</h1>
    <div className='contenido'>
      <div className='contenedorTexto'>
        <h1 className='estiloTitulo'>Contenido de Comisiones</h1>
        <h3 className='estiloTexto'>La provincia de Quispicanchi es una de las trece provincias que conforman el departamento del Cuzco en el Sur del Perú.</h3>
      </div>
    </div>

    {/* contenido de alcaldia */}
    <img className='' src={muni} alt="muni" width={Comisiones}/>

    <div>
      <Footer/> 
    </div>
    </>
  );
  
}