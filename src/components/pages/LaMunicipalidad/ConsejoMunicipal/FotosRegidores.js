import '../../../Style/regidores.css'
import React from "react";

function FotosRegidores(props){
   return(
      <div className="contenedorTextoRegidores">
         <img className="contenedorImagenRegidores"
         src={require(`../../../../images/${props.imagen}`)} 
          alt={props.altImagen}/>

         <h5 className="contenedorTituloRegidores">{props.titulo}</h5>
         <p className='contenedorParrafoRegidores'>
            {props.texto}
         </p>
        
         
      </div>
   );
}
export default FotosRegidores;