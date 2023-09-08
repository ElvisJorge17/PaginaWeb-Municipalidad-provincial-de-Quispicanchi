import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import "../Style/estilosgenerales.css"
import "../Style/Inicio.css"
import alcalde from "../../images/ImagenesContenido/alcalde.jpg"
import plaza from "../../images/ImagenesContenido/Plaza-de-Armas-Urcos-2023.jpg"

export default function Home() {
  return (
    <>
      <div className='contenedorSliderEInfo'>
        <p className='home Inicio'></p>
        <div className='contenedorFacebook'>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fprofile.php%3Fid%3D100088963969826&tabs=timeline&width=390&height=530&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
          width="390" height="530" style={{border:"none",overflow:"hidden"}}
          scrolling="no" frameborder="0" allowfullscreen="true" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
      <h1 className="tituloPestañas contenedorTitulo">Municipalidad Provincial de Quispicanchi</h1>
        <div className='contenido'>
          <div className='contenedorTexto'>
            <h3 className='estiloTextoBlack'>
              La Municipalidad Provincial de Quispicanchi, se ha proyectado trabajar en el 
              camino del buen desarrollo institucional impulsando el uso de las tecnologías 
              de la información y comunicación para crear un nuevo e innovador modelo de administración 
              pública con el propósito de mejorar el uso de los servicios e información a los 
              Quispicanchinos, aumentar la eficiencia y eficacia de la administración pública, promover 
              la inclusión, fomentar la transparencia, colaboración y participación ciudadana, para de 
              esta manera avanzar hacia una Sociedad de la Información y el Conocimiento.
            </h3>
          </div>
        </div>

      <div className='contenidoPInicio'>
        <div className='ContenidoQuispicanchi'>
          <h2 className='subTitulo'>Quispicanchi, una de las tierras cusqueñas más ricas en historia y tradición</h2>
          <h3 className='estiloTextoWhite'>Según los historiadores, Quispicanchi es una palabra quechua que significa 
            “lugar brillante”, donde habitaron diversas tribus, como los Pinaguas, los cuales 
            posteriormente fueron sometidos por el imperio del inca Pachacútec.</h3>
          <h3 className='estiloTextoWhite'>Por ello, en el lugar se puede hallar diversos restos propios de la época inca, 
            como el Templo Pikillaqta, el Conjunto Arqueológico de Tipón, el Santuario Inca del 
            Apu Pachatusun y la Waca de los Sapos de Piedra.</h3>
        </div>
      </div>
      <div className='contenedorAlcalde'>
      <img className='contenedorImagenAlcalde' src={alcalde} alt="alcalde" width={100}/>
        <div className='contenedorInformacionAlcalde'>
          <h2 className='subTitulo'> Yamil Efraín Castillo Cusihuallpa </h2>
          <h2 className='subTitulo'>Alcalde</h2>
          <h3 className='estiloTextoInfoAlcalde'> Con mucho entusiasmo asumimos esta alta responsabilidad de dirigir los 
            destinos de nuestra provincia, y ratificamos que nuestros compromisos 
            serán cumplidos con la participación directa e indirecta de todos y cada 
            uno de ustedes. </h3>
            <h3 className='estiloTextoInfoAlcalde'> 
            Sabemos de nuestras necesidades a nivel de la provincia, y de manera especial, 
            a nivel de nuestro distrito de Urcos. Estas necesidades iremos aplacando en un 
            corto, mediano o largo plazo según su naturaleza.</h3>
            <h3 className='estiloTextoInfoAlcalde'>
            El equipo que hoy nos encontramos al frente de la presente gestión, tiene la 
            satisfacción de contar con jóvenes profesionales y con amplia experiencia en gestión, 
            y lo más importantes contamos con el apoyo de ustedes: hombres y mujeres; adultos y 
            jóvenes que son el ingrediente fundamental para el desarrollo de la provincia Quispicanchi.</h3>

        </div>
      </div>

      <div className='contenedorPlazayFB'>
      <br />
      <h2 className='TituloAudiencia'> AUDIENCIA PÚBLICA DE RENDICIÓN DE CUENTAS 2023</h2><br />
        {/* <img className='contenedorImagenPlaza' src={plaza} alt="alcalde" width={100}/> */}
        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100088963969826%2Fvideos%2F284023337591442%2F&show_text=false&width=560&t=0" 
        width="920" height="540" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </div>  
      <div>
        <Footer/> 
      </div>
    </>
  );
}
