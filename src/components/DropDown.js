//import React, { useState } from 'react';
import "../components/Style/DropDown.css";
import NavigationDesktop from "./NavigationDesktop";
import cabecera from "../images/logoMuni.png";
import portalTransparencia from "../images/PortalDeTransparencia.png"
import navLinksData from "../data.json";



function DropDown() {
  return (
    
    <div className='DropDown'>

          <a href='/' className=''>
            <img className='logo' src={cabecera} alt='logo' />
            <a href="https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=11816&id_tema=5&ver=#.YKwf48S23IW" target="_blank" rel="noopener noreferrer" className='logo-anchor'>
              <img className='logo2' src={portalTransparencia} alt='logo' />
            </a>
          </a>
          <a href="https://www.muniurcos.gob.pe/static/media/OMN012-080823.58ed9a6e50030bae6e39.pdf" target="_blank" rel="noopener noreferrer" className='logo-anchor'>   
              <h2 className="linkConvocatoria">Audiencia pública. Fecha: Domingo 27 de agosto del 2023: click aqui.
              </h2>
              <h2 className="linkConvocatoria">Ordenanza Municipal N° 12-2023-MPQ/U</h2>
              
          </a>
          
          <div className="contenedorMenu">
            <NavigationDesktop navLinksData={navLinksData} />
          </div>
          {/* <NavigationDesktop navLinksData={navLinksData} /> */}

      
    </div>
    );

    // <div className='DropDown'>
    //   <div className='navbar'>
    //     <div className='header'>
    //       <a href='#' className='logo-anchor'>
    //         <img className='logo' src={logo} alt='logo' />
    //       </a>
    //       <div className= 'pages-container'>
    //     <NavigationDesktop navLinksData={navLinksData} />
        
    //   </div>
      
    //     </div>
    //   </div>

      
    // </div>
}

export default DropDown;
