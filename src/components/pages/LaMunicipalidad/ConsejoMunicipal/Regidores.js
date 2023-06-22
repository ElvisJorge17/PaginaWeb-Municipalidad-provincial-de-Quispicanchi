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
    <h1 className="tituloPestañas contenedorTitulo">Regidores</h1>
    <div className='contenido'>
      <div className='contenedorTexto'>
        <h1 className='estiloTitulo'>Contenido de Regidores</h1>
        <h3 className='estiloTexto'>La provincia de Quispicanchi es una de las trece provincias que conforman el departamento del Cuzco en el Sur del Perú.</h3>
      </div>
    </div>

    <div className='contenedorCajasRegidores'> 
        <FotosRegidores
          imagen='img11.jpg'
          altImagen= 'foto regidor 1'
          titulo= 'Nombre regidor 1'
          texto='correo electronico'
        />
        <FotosRegidores
          imagen='img22.jpg'
          altImagen= 'foto regidor 1'
          titulo= 'Nombre regidor 1'
          texto='correo electronico'
        />
        <FotosRegidores
          imagen='img33.jpg'
          altImagen= 'foto regidor 1'
          titulo= 'Nombre regidor 1'
          texto='correo electronico'
        />
        <FotosRegidores
          imagen='img22.jpg'
          altImagen= 'foto regidor 1'
          titulo= 'Nombre regidor 1'
          texto='correo electronico'
        />
        <FotosRegidores
          imagen='img-4.jpg'
          altImagen= 'foto regidor 1'
          titulo= 'Nombre regidor 1'
          texto='correo electronico'
        />
        <FotosRegidores
          imagen='img-3.jpg'
          altImagen= 'foto regidor 1'
          titulo= 'Nombre regidor 1'
          texto='correo electronico'
        />
        <FotosRegidores
          imagen='PlazaDeArmas.jpg'
          altImagen= 'foto regidor 1'
          titulo= 'Nombre regidor 1'
          texto='correo electronico'
        />
      </div>

    {/* contenido de alcaldia */}
    <div>
      <Footer/> 
    </div>
    </>
  );
  
}