import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import '../../Style/LaMunicipalidad.css'
export default function MisionYVision() {
  return (
    <>
    <h1 className="tituloPestañas contenedorTitulo">Misión y Visión</h1>
    <div className='contenido'>
      <div className='contenedorTexto'>
        <h2 className='estiloSubTitulo'>Misión</h2>
        <h3 className='estiloTexto'>Quispicanchi, provincia moderna y segura, con una población educada, 
        saludable, que participa activamente en la gestión del desarrollo local y provincial y ha consolidado 
        la recuperación de su identidad cultural; con adecuados servicios básicos, turísticos y de comunicación. 
        En Quispicanchi el avance en la reducción de la pobreza rural y erradicación de la desnutrición infantil 
        como acciones destacadas de la Mancomunidad la hace referente de la política pública regional y de la 
        cooperación internacional. En las tres cuencas que comprende el territorio provincial las actividades 
        agrícola y pecuaria se vienen desarrollando con un alto nivel de tecnificación que genera beneficios 
        para los productores preservando la calidad del medio ambiente. Como resultado del incremento de la 
        producción y productividad y adicionalmente de la identificación de productos clave, la actividad de 
        transformación agroindustrial cuenta con un proceso de consolidación y se posiciona crecientemente en 
        los mercados terminales generando empleo para jóvenes. La actividad turística se ha constituido en uno 
        de los principales rubros del PBI Provincial articulando la producción artesanal a mercados 
        internacionales. Con inversiones de la Mancomunidad se han consolidado 5 productos turísticos que 
        dinamizan las economías de las comunidades y sus familias producto de su participación en la prestación 
        de servicios, paralelamente los actores del mercado han formado una red empresarial que contribuye con el 
        posicionamiento de la Provincia como destino turístico sentando las bases para el desarrollo del Clúster 
        Turismo – Artesanía. En Quispicanchi el funcionamiento de la Mancomunidad como modelo de gestión del 
        desarrollo local con base territorial ha probado ser eficiente, convocando a los diferentes actores a 
        participar de un proceso de concertación que identifica las prioridades del desarrollo y asume las 
        responsabilidades frente a ello.

        </h3>
        <h2 className='estiloSubTitulo'>Visión</h2>
        <h3 className='estiloTexto'> La Municipalidad Provincial de Quispicanchi es una institución que 
        cuenta con una gestión responsable y transparente con recurso humano capacitado, con valores y 
        principios que garantizan la adecuada atención a la población; brinda una adecuada prestación de 
        servicios públicos, promueve el desarrollo económico, el crecimiento urbano y rural ordenado, la 
        promoción y defensa de los derechos de la población vulnerable. Así mismo articula los esfuerzos de 
        las instituciones del sector público, privado, cooperación internacional en un modelo de cogestión 
        para mejorar las condiciones de vida de la ciudadanía.

        </h3>
      </div>
    </div>
    <div>
      <Footer/> 
    </div>
    </>
  );
  
}