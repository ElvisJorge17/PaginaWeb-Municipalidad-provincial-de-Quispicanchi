import React from 'react';
import '../../../../App.css';
import Footer from '../../../Footer';
import '../../../Style/NuestraProvincia.css';
import FotosRegidores from './FotosRegidores';
import '../../../Style/regidores.css'


export default function Regidores() {
  
  return (
    <>
    {/* <h1 className='products'>UBICACION</h1> */}
    <h1 className="tituloPestañas contenedorTitulo">Regidores de la Municipalidad Provincial de Quispicanchi</h1>
    {/* <div className='contenido'>
      <div className='contenedorTexto'>
        <h1 className='estiloTitulo'>Contenido de Regidores</h1>
        <h3 className='estiloTexto'>La provincia de Quispicanchi es una de las trece provincias que conforman el departamento del Cuzco en el Sur del Perú.</h3>
      </div> 
    </div>*/}

    <div className='contenedorCajasRegidores'> 
        <FotosRegidores
          imagen='ConsejoMunicipal/Maida-Tunquipa.jpg'
          altImagen= ''
          titulo= 'TEC. MAIDA TUNQUIPA TACURI'
          texto='1era REGIDORA'
        />
        <FotosRegidores
          imagen='ConsejoMunicipal/Richard-Huaman.jpg'
          altImagen= ''
          titulo= 'TEC. RICHARD HUAMAN MAMANI'
          texto='2do REGIDOR'
        />
        <FotosRegidores
          imagen='ConsejoMunicipal/Yennifer-Hancco.jpg'
          altImagen= ''
          titulo= 'ABOG. YENNIFER HANCCO PACHA'
          texto='3era REGIDORA'
        />
        <FotosRegidores
          imagen='ConsejoMunicipal/Julian-Yapura.jpg'
          altImagen= ''
          titulo= 'SR. JULIAN QQUESUALLPA YAPURA'
          texto='4to REGIDOR'
        />
        <FotosRegidores
          imagen='ConsejoMunicipal/Lucia-Auccatinco.jpg'
          altImagen= ''
          titulo= 'TEC. LUCIA MILDRID AUCCATINCO MONRROY'
          texto='5ta REGIDORA'
        />
        <FotosRegidores
          imagen='ConsejoMunicipal/Jose-Yauri.jpg'
          altImagen= ''
          titulo= 'TEC. JOSE YAURI CCANAHUIRE'
          texto='6to REGIDOR'
        />
        <FotosRegidores
          imagen='ConsejoMunicipal/Helar-Angeles.jpg'
          altImagen= ''
          titulo= 'LIC. HELAR REYNALDO ANGELES RAMIREZ'
          texto='7mo REGIDOR'
        />
        <FotosRegidores
          imagen='ConsejoMunicipal/Emilio_Olivera.jpg'
          altImagen= ''
          titulo= 'C.D. EMILIO DEL CARMEN LORENZO OLIVERA FLORES'
          texto='8vo REGIDOR'
        />
        <FotosRegidores
          imagen='ConsejoMunicipal/Julian-Condori.jpg'
          altImagen= ''
          titulo= 'SR. JULIAN CONDORI SUCLLI'
          texto='9no REGIDOR'
        />
      </div>

    {/* contenido de alcaldia */}
    <div>
      <Footer/> 
    </div>
    </>
  );
  
}