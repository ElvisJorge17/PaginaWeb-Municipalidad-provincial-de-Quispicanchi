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
            <a href="https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=67965" target="_blank" rel="noopener noreferrer" className='logo-anchor'>
              <img className='logo2' src={portalTransparencia} alt='logo' />
            </a>
          </a>
          <a href="https://www.muniurcos.gob.pe/static/media/Convocatoria-CAS-005-2023-MPQ-26-10-2023.de0733d02ca400ef9c8f.pdf" target="_blank" rel="noopener noreferrer" className='logo-anchor'>   
              <h2 className="linkConvocatoria">Convocatoria concurso CAS 005-2023-MPQ: click aquí.
             </h2>
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
