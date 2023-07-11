import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import '../../Style/MesaDePartes.css'
import imagenmesa from '../../../images/imagenesMesaDePartes/MesaDePartes.png'
import imagenPersona from '../../../images/imagenesMesaDePartes/PersonaMensaje.png'

export default function MesaDePartes() {
  return (
    <>
    {/* <h1 className='products'>UBICACION</h1> */}
    <h1 className="tituloPestañas contenedorTitulo">Mesa de partes virtual de la Municipalidad Provincial de Quispicanchi</h1>
    <div className='contenido'>
      <div className='contenedorTexto'>
        <h3 className='estiloTexto'>Mesa de partes virtual es un servicio ofrecido por la Municipalidad Provincial de Quispicanchi, con el fin de ofrecerles una plataforma virtual para realizar sus tramites.</h3>
        <h3 className='estiloTexto'>Recuerde ingresar correctamente los datos solicitados y registrarse con su correo electronico.</h3>
      </div>
    </div>
    <div className='contenedorMesaDePartes'>
        <div className='contenedorImagen'>
          <img src={imagenPersona} alt="pte" width={500} />
        </div>
        <a href="https://forms.gle/E5HKmR3TZBDft7Yb6" target="_blank" rel="noopener noreferrer">
            <img className='borderLogoMesa' src={imagenmesa} alt="pte" width={200} />
        </a>
    </div>

    <div>
      <Footer/> 
    </div>
    </>
  );
  
}