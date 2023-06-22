import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import '../../Style/NuestraProvincia.css'

export default function Services() {
  return (
    <>
    {/* <h1 className='products'>UBICACION</h1> */}
    <h1 className="tituloPestañas contenedorTitulo">Ubicación</h1>
    <div className='contenido'>
      <div className='contenedorTexto'>
        <h3 className='estiloTexto'>La provincia de Quispicanchi es una de las trece provincias que conforman el departamento del Cuzco en el Sur del Perú.</h3>
        <h3 className='estiloTexto'>Limita por el Norte con la provincia de Paucartambo y el departamento de Madre de Dios, por el Este con el departamento de Puno, por el Sur con la provincia de Canchis y la provincia de Acomayo y por el Oeste con la provincia del Cusco y la provincia de Paruro.</h3>
        <h3 className='estiloTexto'>La capital de esta provincia es la ciudad de Urcos y como lugar turístico se tiene la famosa laguna de Urcos.</h3>
        <h3 className='estiloTexto'>El distrito de Urcos fue creado mediante Ley del 2 de enero de 1857, dado en el gobierno del Presidente Ramón Castilla.</h3>
      </div>
    </div>

    <div className='contenedorMapa'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992384.9075651467!2d-72.84453182187497!3d-13.687924499999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916e8c63773fe735%3A0x5cd3a9e2f7bad14e!2sMunicipalidad%20Provincial%20de%20Quispicanchi%20-%20Urcos!5e0!3m2!1ses-419!2spe!4v1686800636862!5m2!1ses-419!2spe" 
    width="600" height="450" style={{border:"0"}}
    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  
    <div className='contenedorMapa'>
      <iframe width="1536" height="864" src="https://www.youtube.com/embed/Lc9APxeKCww" title="Laguna de Urcos Cusco by Drone" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div>
      <Footer/> 
    </div>
    </>
  );
  
}